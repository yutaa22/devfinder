import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import RepoList from "./components/RepoList";

function App() {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");

  const fetchGitHubData = async (username) => {
    try {
      setError("");
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      if (!userRes.ok) throw new Error("User not found");

      const user = await userRes.json();
      const repoRes = await fetch(`https://api.github.com/users/${username}/repos`);
      const repoData = await repoRes.json();

      setUserData(user);
      setRepos(repoData.slice(0, 5)); // Show top 5 repos
    } catch (err) {
      setError(err.message);
      setUserData(null);
      setRepos([]);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-2 text-[#0079ff] flex items-center gap-2">
        <i className="fa-brands fa-github text-3xl"></i> DevFinder
      </h1>
      <p className="text-gray-400 mb-8">
        Discover GitHub developers and their profiles
      </p>

      <SearchBar onSearch={fetchGitHubData} />

      {error && <p className="text-red-400 mt-4">{error}</p>}
      {userData && (
        <>
          <ProfileCard user={userData} />
          {repos.length > 0 && <RepoList repos={repos} />}
        </>
      )}
    </div>
  );
}

export default App;
