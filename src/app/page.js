import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductsPage from "./product/page";
import TopRatedSection from "@/components/TopRatedSection";

export default function Home() {
  return (
    <div>
      <Navbar isHomePage={true} />
      <Banner />
      
      <main>
        <ProductsPage />
        <TopRatedSection/>
      </main>
      <Footer/>
    </div>
  );
}
