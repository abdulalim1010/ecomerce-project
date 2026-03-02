import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// GET - Fetch all top rated products
export async function GET() {
  const client = await clientPromise;
  const db = client.db("ecomerce-project");

  // Check if collection is empty, if so seed with default data
  const count = await db.collection("toprated").countDocuments();
  if (count === 0) {
    await db.collection("toprated").insertMany([
      {
        name: "Bajaj Pulsar NS200",
        price: 320000,
        description: "Powerful Bajaj Pulsar NS200 with great mileage and performance.",
        images: {
          front: "/toprated/bajaj-pulsarns200-front.jpg",
          back: "/toprated/bajaj-pulsarns200-back.jpg"
        }
      },
      {
        name: "TVS Apache RTR 160",
        price: 280000,
        description: "Sporty TVS Apache RTR 160 with excellent handling and speed.",
        images: {
          front: "/toprated/tvs-apache160-front.jpg",
          back: "/toprated/tvs-apache160-back.jpg"
        }
      },
      {
        name: "Yamaha R15 V4",
        price: 450000,
        description: "Stylish Yamaha R15 V4 with advanced features and racing performance.",
        images: {
          front: "/toprated/yamaha-r15v4-front.jpg",
          back: "/toprated/yamaha-r15v4-back.jpg"
        }
      },
      {
        name: "Honda CBR 150R",
        price: 420000,
        description: "Premium Honda CBR 150R with smooth handling and sporty design.",
        images: {
          front: "/toprated/honda-cbr150r-front.jpg",
          back: "/toprated/honda-cbr150r-back.jpg"
        }
      },
      {
        name: "Suzuki Gixxer SF",
        price: 310000,
        description: "Modern Suzuki Gixxer SF with aggressive look and strong engine.",
        images: {
          front: "/toprated/suzuki-gixxer-front.jpg",
          back: "/toprated/suzuki-gixxer-back.jpg"
        }
      },
      {
        name: "KTM RC 125",
        price: 500000,
        description: "High-performance KTM RC 125 built for speed and thrill lovers.",
        images: {
          front: "/toprated/ktm-rc125-front.jpg",
          back: "/toprated/ktm-rc125-back.jpg"
        }
      }
    ]);
  }

  const products = await db
    .collection("toprated")
    .find({})
    .toArray();

  return Response.json(products);
}

// POST - Add new top rated product
export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("ecomerce-project");
    
    const body = await request.json();
    const { name, price, description, images } = body;
    
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
      images: images || { front: "", back: "" },
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const result = await db.collection("toprated").insertOne(newProduct);
    
    return Response.json({
      success: true,
      message: "Top Rated Product added successfully",
      productId: result.insertedId
    });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// PUT - Update top rated product
export async function PUT(request) {
  try {
    const client = await clientPromise;
    const db = client.db("ecomerce-project");
    
    const body = await request.json();
    const { id, name, price, description, images } = body;
    
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
    if (images) updateData.images = images;
    
    const result = await db.collection("toprated").findOneAndUpdate(
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
      message: "Top Rated Product updated successfully",
      product: result
    });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// DELETE - Delete top rated product
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
    
    const result = await db.collection("toprated").deleteOne({
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
      message: "Top Rated Product deleted successfully"
    });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
