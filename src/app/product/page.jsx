import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import ProductCard from "@/components/ProductCard";

async function getProducts() {
  try {
    const client = await clientPromise;
    const db = client.db("ecomerce-project");
    const products = await db.collection("product").find({}).toArray();
    
    // Convert MongoDB documents to plain objects with string IDs
    return products.map(product => ({
      _id: product._id.toString(),
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      images: product.images,
      imageUrl: product.imageUrl,
      thumbnail: product.thumbnail
    }));
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
            <ProductCard 
              key={product._id} 
              id={product._id}
              name={product.name}
              price={product.price}
              image={product.image}
              images={product.images}
              imageUrl={product.imageUrl}
              thumbnail={product.thumbnail}
            />
          ))}

        </div>
      )}

    </div>
  );
}
