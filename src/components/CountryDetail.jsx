import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function CountryDetail() {
  const { code } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]))
      .catch((err) => console.error("Fetch error:", err));
  }, [code]);

  if (!country)
    return (
      <div className="min-h-screen flex flex-col bg-white text-black">
        <Header />
        <p className="text-center mt-20 text-lg font-medium">
          Loading country info...
        </p>
        <Footer />
      </div>
    );

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Header />

      <main className="max-w-4xl mx-auto mt-10 p-6 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20">
        <div className="flex gap-6 items-center mb-6">
          <img
            src={country.flags.svg}
            alt={`Flag of ${country.name.common}`}
            className="h-24 w-36 rounded-xl shadow-md border"
          />
          <h2 className="text-4xl font-bold">{country.name.common}</h2>
        </div>
        <div className="space-y-3 text-lg">
          <p>
            <strong>🌍 Region:</strong> {country.region}
          </p>
          <p>
            <strong>🏙️ Capital:</strong> {country.capital?.[0] || "N/A"}
          </p>
          <p>
            <strong>👥 Population:</strong>{" "}
            {country.population.toLocaleString()}
          </p>
          <p>
            <strong>📐 Area:</strong> {country.area.toLocaleString()} km²
          </p>
          <p>
            <strong>💬 Languages:</strong>{" "}
            {country.languages
              ? Object.values(country.languages).join(", ")
              : "N/A"}
          </p>
          <p>
            <strong>💱 Currency:</strong>{" "}
            {country.currencies
              ? Object.values(country.currencies)
                  .map((c) => `${c.name} (${c.symbol})`)
                  .join(", ")
              : "N/A"}
          </p>
        </div>
      </main>

      <Footer className="text-center py-4 bg-white text-gray-700 border-t border-gray-200" />
    </div>
  );
}

export default CountryDetail;
