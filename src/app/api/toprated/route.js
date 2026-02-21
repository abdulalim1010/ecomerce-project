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