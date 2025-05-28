import Navbar from '../components/Navbar';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Products() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">All Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}
