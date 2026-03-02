import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const { id } = await params;
  const client = await clientPromise;

  const db = client.db("ecomerce-project");

  const product = await db
    .collection("toprated")
    .findOne({
      _id: new ObjectId(id)
    });

  return Response.json(product);

}