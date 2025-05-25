import Head from 'next/head';

export default function Booking() {
  return (
    <>
      <Head>
        <title>Book a Session | Ministry in the Markets</title>
      </Head>
      <div className="min-h-screen bg-white text-black py-10 px-4 md:px-20">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Book a 1-on-1 Coaching Session</h1>
        <p className="text-center max-w-xl mx-auto text-lg mb-12">
          Choose the session that fits your goals and schedule a personalized session with Ministry in the Markets.
        </p>

        <div className="grid gap-10 max-w-4xl mx-auto">
          <div className="border p-6 rounded-xl shadow-lg bg-blue-50">
            <h2 className="text-2xl font-semibold mb-2 text-blue-800">Beginner: Intro to the Stock Market & Options</h2>
            <p className="mb-4">Learn the basics of investing and how options work in this foundational session. ($50)</p>
            <a
              href="https://calendly.com/herose4the/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg"
            >
              Book Beginner Session
            </a>
          </div>

          <div className="border p-6 rounded-xl shadow-lg bg-blue-50">
            <h2 className="text-2xl font-semibold mb-2 text-blue-800">Intermediate: How AI Can Improve Your Trades</h2>
            <p className="mb-4">We'll review your current strategy and show how AI can enhance your portfolio and decisions. ($75)</p>
            <a
              href="https://calendly.com/herose4the/75-intermediate-how-ai-can-improve-your-trades"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg"
            >
              Book Intermediate Session
            </a>
          </div>

          <div className="border p-6 rounded-xl shadow-lg bg-blue-50">
            <h2 className="text-2xl font-semibold mb-2 text-blue-800">Advanced: My Day Trading Strategy + AI Tools</h2>
            <p className="mb-4">Dive deep into my proven day trading strategy and learn how AI helps identify high-probability setups. ($100)</p>
            <a
              href="https://calendly.com/herose4the/advanced"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg"
            >
              Book Advanced Session
            </a>
          </div>

          <div className="border p-6 rounded-xl shadow-lg bg-blue-50">
            <h2 className="text-2xl font-semibold mb-2 text-blue-800">Full Package: Complete Coaching Experience</h2>
            <p className="mb-4">Get access to all sessions — beginner, intermediate, and advanced — in one comprehensive package. ($150)</p>
            <a
              href="https://calendly.com/herose4the/200-full-package"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg"
            >
              Book Full Package
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
