import clientPromise from "@/lib/mongodb";

// GET - Fetch all orders
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("ecomerce-project");

    const orders = await db
      .collection("orders")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return Response.json(orders);
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// POST - Create new order
export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("ecomerce-project");

    const body = await request.json();
    const { userId, products, total, status, shippingAddress, paymentMethod } = body;

    if (!userId || !products || products.length === 0 || !total) {
      return Response.json(
        { success: false, error: "User ID, products, and total are required" },
        { status: 400 }
      );
    }

    const newOrder = {
      userId,
      products: products.map(p => ({
        productId: p.productId,
        name: p.name,
        price: p.price,
        quantity: p.quantity || 1
      })),
      total: Number(total),
      status: status || "pending",
      shippingAddress: shippingAddress || {},
      paymentMethod: paymentMethod || "cash_on_delivery",
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await db.collection("orders").insertOne(newOrder);

    return Response.json({
      success: true,
      message: "Order placed successfully",
      orderId: result.insertedId
    });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// PUT - Update order status
export async function PUT(request) {
  try {
    const client = await clientPromise;
    const db = client.db("ecomerce-project");

    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return Response.json(
        { success: false, error: "Order ID and status are required" },
        { status: 400 }
      );
    }

    const { ObjectId } = await import("mongodb");

    const result = await db.collection("orders").findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { status, updatedAt: new Date() } },
      { returnDocument: "after" }
    );

    if (!result) {
      return Response.json(
        { success: false, error: "Order not found" },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      message: "Order status updated successfully",
      order: result
    });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// DELETE - Delete order
export async function DELETE(request) {
  try {
    const client = await clientPromise;
    const db = client.db("ecomerce-project");

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return Response.json(
        { success: false, error: "Order ID is required" },
        { status: 400 }
      );
    }

    const { ObjectId } = await import("mongodb");

    const result = await db.collection("orders").deleteOne({
      _id: new ObjectId(id)
    });

    if (result.deletedCount === 0) {
      return Response.json(
        { success: false, error: "Order not found" },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      message: "Order deleted successfully"
    });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
