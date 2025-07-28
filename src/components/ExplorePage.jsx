import Header from "./Header";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import CountryCard from "./CountryCard";

function ExplorePage({ countries, search, setSearch }) {
  const filtered = Array.isArray(countries)
    ? countries.filter((c) =>
        c.name.common.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col justify-between">
      <Header />

      <main className="px-6 py-12">
        <h1 className="text-center text-5xl font-bold mb-4 tracking-wide">
          🌍 Explore Countries
        </h1>
        <p className="text-center text-lg mb-8 text-gray-600">
          Search and browse countries from around the world.
        </p>

        <SearchBar onSearch={setSearch} />

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {filtered.length > 0 ? (
            filtered.map((c) => <CountryCard key={c.cca3} country={c} />)
          ) : (
            <p className="text-center text-xl mt-20 text-gray-500">
              🚫 No results found. Try a different search!
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ExplorePage;
