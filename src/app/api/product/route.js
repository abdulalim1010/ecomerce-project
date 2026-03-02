import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// GET - Fetch all products
export async function GET() {
  const client = await clientPromise;
  const db = client.db("ecomerce-project");

  // Check if collection is empty, if so seed with default data
  const count = await db.collection("product").countDocuments();
  if (count === 0) {
    await db.collection("product").insertMany([
      {
        name: "Yamaha MT-15",
        price: 380000,
        description: "The Yamaha MT-15 features a powerful 155cc engine with VVA technology.",
        image: "/main-product/bike-1.jpg"
      },
      {
        name: "KTM Duke 200",
        price: 450000,
        description: "The KTM Duke 200 is a beast on the streets with its powerful engine.",
        image: "/main-product/bike-2.jpg"
      },
      {
        name: "Honda CB Hornet",
        price: 290000,
        description: "The Honda CB Hornet offers great value with its sporty design.",
        image: "/main-product/bike-3.jpg"
      },
      {
        name: "Suzuki Gixxer",
        price: 275000,
        description: "The Suzuki Gixxer is known for its reliability and performance.",
        image: "/main-product/bike-4.jpg"
      },
      {
        name: "Bajaj Pulsar NS125",
        price: 180000,
        description: "The Bajaj Pulsar NS125 offers great performance at an affordable price.",
        image: "/main-product/bike-5.jpg"
      },
      {
        name: "TVS Apache RTR 200",
        price: 320000,
        description: "The TVS Apache RTR 200 is a powerful sports bike with advanced features.",
        image: "/main-product/bike-6.jpg"
      },
      {
        name: "Hero Xpulse 200",
        price: 250000,
        description: "The Hero Xpulse 200 is an adventure bike perfect for off-road enthusiasts.",
        image: "/main-product/bike-7.jpg"
      },
      {
        name: "Royal Enfield Hunter 350",
        price: 280000,
        description: "The Royal Enfield Hunter 350 is a classic retro-styled motorcycle.",
        image: "/main-product/bike-8.jpg"
      }
    ]);
  }

  const products = await db
    .collection("product")
    .find({})
    .toArray();

  return Response.json(products);
}

// POST - Add new product
export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("ecomerce-project");
    
    const body = await request.json();
    const { name, price, description, image, images, imageUrl, thumbnail } = body;
    
    if (!name || !price) {
      return Response.json(
        { success: false, error: "Name and price are required" },
        { status: 400 }
      );
    }
    
    const newProduct = {
      name,
      price: Number(price),
      description: description || "",
      image: image || "",
      images: images || { front: "", back: "" },
      imageUrl: imageUrl || "",
      thumbnail: thumbnail || "",
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const result = await db.collection("product").insertOne(newProduct);
    
    return Response.json({
      success: true,
      message: "Product added successfully",
      productId: result.insertedId
    });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// PUT - Update product
export async function PUT(request) {
  try {
    const client = await clientPromise;
    const db = client.db("ecomerce-project");
    
    const body = await request.json();
    const { id, name, price, description, image, images, imageUrl, thumbnail } = body;
    
    if (!id) {
      return Response.json(
        { success: false, error: "Product ID is required" },
        { status: 400 }
      );
    }
    
    const updateData = {
      updatedAt: new Date()
    };
    
    if (name) updateData.name = name;
    if (price) updateData.price = Number(price);
    if (description !== undefined) updateData.description = description;
    if (image !== undefined) updateData.image = image;
    if (images) updateData.images = images;
    if (imageUrl !== undefined) updateData.imageUrl = imageUrl;
    if (thumbnail !== undefined) updateData.thumbnail = thumbnail;
    
    const result = await db.collection("product").findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: updateData },
      { returnDocument: "after" }
    );
    
    if (!result) {
      return Response.json(
        { success: false, error: "Product not found" },
        { status: 404 }
      );
    }
    
    return Response.json({
      success: true,
      message: "Product updated successfully",
      product: result
    });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// DELETE - Delete product
export async function DELETE(request) {
  try {
    const client = await clientPromise;
    const db = client.db("ecomerce-project");
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    
    if (!id) {
      return Response.json(
        { success: false, error: "Product ID is required" },
        { status: 400 }
      );
    }
    
    const result = await db.collection("product").deleteOne({
      _id: new ObjectId(id)
    });
    
    if (result.deletedCount === 0) {
      return Response.json(
        { success: false, error: "Product not found" },
        { status: 404 }
      );
    }
    
    return Response.json({
      success: true,
      message: "Product deleted successfully"
    });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
