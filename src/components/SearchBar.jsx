function SearchBar({ onSearch }) {
  return (
    <div className="text-center my-6">
      <input
        type="text"
        placeholder="🔎 Search countries..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-2/3 md:w-1/2 p-4 rounded-full bg-white/20 text-black placeholder-white shadow-md  focus:outline-none focus:ring-2 focus:ring-pink-300"
      />
    </div>
  );
}
export default SearchBar;
