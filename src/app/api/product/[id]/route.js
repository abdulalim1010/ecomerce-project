import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const { id } = await params;
  const client = await clientPromise;
  const db = client.db("ecomerce-project");

  const product = await db
    .collection("product") // ✅ তোমার আসল collection name
    .findOne({
      _id: new ObjectId(id),
    });

  if (!product) {
    return Response.json({ message: "Not found" }, { status: 404 });
  }

  return Response.json(product);
}