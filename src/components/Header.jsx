import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const navLabel =
    location.pathname === "/explore"
      ? "🏠 Home"
      : location.pathname.startsWith("/country/")
      ? "🔍 Explore"
      : "🌐 Explore";

  const navLink =
    location.pathname === "/explore"
      ? "/"
      : location.pathname.startsWith("/country/")
      ? "/explore"
      : "/explore";

  return (
    <header className="p-6 flex justify-between items-center shadow-sm">
      <h1 className="text-3xl font-bold text-gray-800">GlobeView</h1>
      <Link
        to={navLink}
        className="bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition font-semibold"
      >
        {navLabel}
      </Link>
    </header>
  );
}

export default Header;
