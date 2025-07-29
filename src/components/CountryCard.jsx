import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const fallbackImage =
  "https://cdn.pixabay.com/photo/2015/03/26/09/54/city-690332_1280.jpg";

function CountryCard({ country }) {
  const [cityImage, setCityImage] = useState(fallbackImage);

  useEffect(() => {
    const fetchCityImage = async (cityName) => {
      try {
        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${cityName}+city&per_page=1`,
          {
            headers: {
              Authorization: import.meta.env.VITE_REACT_APP_API_KEY,
            },
          }
        );
        const data = await response.json();
        const imageUrl = data.photos?.[0]?.src?.large2x || fallbackImage;
        setCityImage(imageUrl);
      } catch (error) {
        console.error("Failed to fetch image from Pexels:", error);
        setCityImage(fallbackImage);
      }
    };

    const query = country.capital?.[0] || country.name.common || "city";
    fetchCityImage(query);
  }, [country]);

  if (!country || !country.name || !country.flags) {
    return (
      <div className="w-[300px] h-[380px] flex items-center justify-center bg-gray-200 rounded-3xl">
        Loading country data...
      </div>
    );
  }

  const flag = country.flags?.svg || "";
  const capital = country.capital?.[0] || "N/A";

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  const currency = country.currencies
    ? Object.values(country.currencies)
        .map((c) => `${c.name} (${c.symbol})`)
        .join(", ")
    : "N/A";

  return (
    <Link to={`/country/${country.cca3}`} className="block">
      <div className="relative w-[300px] h-[380px] rounded-3xl overflow-hidden shadow-xl group transition duration-300 bg-gray-800">
        {/*  High-resolution city image */}
        <img
          src={cityImage}
          alt="City background"
          crossOrigin="anonymous"
          className="absolute inset-0 h-full w-full object-cover z-0"
          style={{ filter: "none", backdropFilter: "none" }}
        />

        {/* 🇺🇳 Flag and Country Name */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2  px-2 py-1 rounded shadow">
          <img
            src={flag}
            alt={`${country.name.common} flag`}
            className="h-8 w-12 object-contain rounded border border-white"
          />
          <span className="text-sm text-white font-medium">
            {country.name.common}
          </span>
        </div>

        {/*  Info Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10 p-5 flex flex-col justify-end">
          <div className="space-y-2 text-sm text-white">
            <p>
              <strong>🏙️ Capital:</strong> {capital}
            </p>
            <p>
              <strong>💱 Currency:</strong> {currency}
            </p>
            <p>
              <strong>💬 Languages:</strong> {languages}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
