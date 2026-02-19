import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("ecommerce-project");

  const products = await db
    .collection("product")
    .find({})
    .toArray();

  return Response.json(products);
}
