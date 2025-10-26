import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) onSearch(username);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username..."
        className="border p-2 rounded w-64 shadow"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded shadow">
        Search
      </button>
    </form>
  );
}
