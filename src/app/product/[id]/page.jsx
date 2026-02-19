import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";

async function getProduct(id) {
  try {
    const client = await clientPromise;
    const db = client.db("ecomerce-project");
    
    const product = await db.collection("product").findOne({
      _id: new ObjectId(id),
    });
    
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default async function ProductDetailPage(props) {
  const params = await props.params;
  const product = await getProduct(params.id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link href="/product" className="text-indigo-600 hover:underline mt-4 inline-block">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <Link href="/product" className="text-indigo-600 hover:underline mb-6 inline-block">
        ← Back to Products
      </Link>
      
      <div className="grid md:grid-cols-2 gap-8 mt-4">
        <div className="relative h-96 rounded-xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">
            {product.name}
          </h1>
          
          <p className="text-2xl text-indigo-600 font-bold mb-4">
            ৳ {product.price}
          </p>
          
          <p className="text-gray-600 mb-6">
            {product.description || "No description available."}
          </p>
          
          <div className="flex gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
              Add to Cart
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
