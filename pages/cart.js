import Navbar from '../components/Navbar';

export default function Cart() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
        <p>Your cart is empty for now.</p>
      </main>
    </>
  );
}
