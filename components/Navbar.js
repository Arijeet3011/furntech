import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/">
          <a className="text-2xl font-bold text-green-800">Furntech</a>
        </Link>
        <div className="space-x-6">
          <Link href="/products">
            <a className="text-gray-700 hover:text-green-700">Products</a>
          </Link>
          <Link href="/cart">
            <a className="text-gray-700 hover:text-green-700">Cart</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
