import Navbar from '../components/Navbar';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <>
      <Navbar />
      <header className="bg-green-100 py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-green-900">Welcome to Furntech</h1>
        <p className="text-xl text-green-700 mb-8">Quality wooden furniture for your home & office.</p>
        <a
          href="/products"
          className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition"
        >
          Shop Now
        </a>
      </header>

      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
