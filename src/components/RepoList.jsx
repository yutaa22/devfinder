export default function RepoList({ repos }) {
  return (
    <div className="w-80">
      <h3 className="text-lg font-semibold mb-2">Top Repositories</h3>
      <ul className="bg-white p-4 rounded-lg shadow space-y-2">
        {repos.map((repo) => (
          <li key={repo.id} className="border-b pb-2">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 font-medium"
            >
              {repo.name}
            </a>
            <p className="text-sm text-gray-600">{repo.language || "N/A"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
