import Link from "next/link";
import Image from "next/image";
import clientPromise from "@/lib/mongodb";

async function getProducts() {
  try {
    const client = await clientPromise;
    const db = client.db("ecomerce-project");
    const products = await db.collection("product").find({}).toArray();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-bold mb-8">
        Our Products
      </h1>

      {products.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white p-4 rounded-xl shadow"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded"
              />

              <h2 className="text-lg font-semibold mt-2">
                {product.name}
              </h2>

              <p className="text-indigo-600 font-bold">
                ৳ {product.price}
              </p>

              <Link href={`/product/${product._id}`}>
                <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded">
                  View Details
                </button>
              </Link>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}
