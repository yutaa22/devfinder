import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) onSearch(username);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-[#161b22] rounded-lg p-2 shadow-md w-[90%] max-w-lg mb-8"
    >
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Search GitHub username..."
        className="flex-grow bg-transparent outline-none text-white placeholder-gray-400 px-3 py-2"
      />
      <button
        type="submit"
        className="bg-[#0079ff] hover:bg-[#005cd1] text-white font-semibold px-5 py-2 rounded-md"
      >
        Search
      </button>
    </form>
  );
}
