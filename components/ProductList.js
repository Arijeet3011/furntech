const products = [
  { id: 1, name: "Wooden Chair", price: "$120", image: "/chair.jpg" },
  { id: 2, name: "Modern Sofa", price: "$520", image: "/sofa.jpg" },
  { id: 3, name: "Study Table", price: "$300", image: "/table.jpg" },
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow-md">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-600">{product.price}</p>
        </div>
      ))}
    </div>
  );
}