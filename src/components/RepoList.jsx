export default function RepoList({ repos }) {
  return (
    <div className="w-[90%] max-w-lg mb-8">
      <h3 className="text-lg font-semibold mb-3 text-[#0079ff]">
        Top Repositories
      </h3>
      <ul className="bg-[#161b22] p-4 rounded-lg shadow space-y-3">
        {repos.map((repo) => (
          <li key={repo.id} className="border-b border-gray-700 pb-2">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-[#0079ff] font-medium"
            >
              {repo.name}
            </a>
            <p className="text-sm text-gray-400">
              {repo.language || "N/A"} • ⭐ {repo.stargazers_count} stars
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
