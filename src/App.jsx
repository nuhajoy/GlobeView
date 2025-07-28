import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WelcomePage from "./components/WelcomePage";
import ExplorePage from "./components/ExplorePage";
import CountryDetail from "./components/CountryDetail";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,region,population,cca3,capital,currencies,languages"
    )
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<WelcomePage />} />

        {/* Explore Countries with SearchBar + Cards */}
        <Route
          path="/explore"
          element={
            <ExplorePage
              countries={countries}
              search={search}
              setSearch={setSearch}
            />
          }
        />

        {/* Country Detail Page */}
        <Route path="/country/:code" element={<CountryDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
