import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
  const client = await clientPromise;
  const db = client.db("ecomerce-project");

  const product = await db.collection("product").findOne({
    _id: new ObjectId(params.id),
  });

  return Response.json(product);
}
