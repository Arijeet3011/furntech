import Head from 'next/head';
import ProductList from '../components/ProductList';

export default function Home() {
  return (
    <>
      <Head>
        <title>Furntech | Home</title>
      </Head>
      <main className="p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to Furntech</h1>
        <ProductList />
      </main>
    </>
  );
}