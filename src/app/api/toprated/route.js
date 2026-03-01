import clientPromise from "@/lib/mongodb";

export async function GET() {

  const client = await clientPromise;

  const db = client.db("ecomerce-project");

  const products = await db
    .collection("toprated")
    .find({})
    .toArray();

  return Response.json(products);

}

export async function DELETE() {
  try {
    const client = await clientPromise;
    const db = client.db("ecomerce-project");
    
    await db.collection("toprated").deleteMany({});
    
    return Response.json({ success: true, message: "All data deleted" });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT() {
  try {
    const client = await clientPromise;
    const db = client.db("ecomerce-project");
    
    // Update all image paths from /products/ to /toprated/
    const result = await db.collection("toprated").updateMany(
      { "images.front": { $regex: "^/products/" } },
      [
        {
          $set: {
            "images.front": { $replaceOne: { input: "$images.front", find: "/products/", replacement: "/toprated/" } },
            "images.back": { $replaceOne: { input: "$images.back", find: "/products/", replacement: "/toprated/" } }
          }
        }
      ]
    );
    
    return Response.json({ 
      success: true, 
      message: "Image paths updated successfully",
      modifiedCount: result.modifiedCount
    });
  } catch (error) {
    return Response.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}

export async function POST() {
  try {
    const client = await clientPromise;
    const db = client.db("ecomerce-project");
    
    const result = await db.collection("toprated").insertMany([
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
    
    return Response.json({ 
      success: true, 
      message: "Data inserted successfully",
      insertedCount: result.insertedCount,
      insertedIds: result.insertedIds
    });
  } catch (error) {
    return Response.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}