import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col justify-between relative overflow-hidden">
      <img
        src="https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg"
        alt="Floral accent"
        className="absolute top-25 right-0 w-44 h-44 object-cover pointer-events-none rounded-bl-full"
      />

      <Header />

      <main className="flex flex-col items-center px-4 py-12 text-center">
        <h2 className="text-5xl font-extrabold mb-4">🌍 Discover the World</h2>
        <p className="max-w-2xl text-lg mb-8 text-gray-600">
          Welcome to GlobeView — your passport to global discovery. Dive into
          interactive country insights, stunning imagery, and real-time facts
          that spark curiosity and connection.
        </p>
        <Link to="/explore">
          <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-medium shadow-md transition">
            🚀 Start Exploring
          </button>
        </Link>
      </main>

      <Footer />
    </div>
  );
}

export default WelcomePage;
