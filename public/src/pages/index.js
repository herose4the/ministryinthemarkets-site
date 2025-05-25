import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ministry in the Markets | Learn to Trade & Invest</title>
      </Head>
      <main className="min-h-screen bg-white text-black py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
          Welcome to Ministry in the Markets
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Discover the power of investing, trading, and AI-enhanced strategies with personalized 1-on-1 coaching. Book your session today!
        </p>
        <Link href="/booking">
          <a className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl text-lg">
            Book a Session
          </a>
        </Link>
      </main>
    </>
  );
}
