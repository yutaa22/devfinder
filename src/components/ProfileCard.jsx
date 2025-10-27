export default function ProfileCard({ user }) {
  return (
    <div className="bg-[#161b22] rounded-lg shadow-lg p-6 w-[90%] max-w-lg text-center mb-8">
      <img
        src={user.avatar_url}
        alt="avatar"
        className="w-28 h-28 rounded-full mx-auto mb-4 border-2 border-[#0079ff]"
      />
      <h2 className="text-2xl font-bold">{user.name || user.login}</h2>
      <p className="text-gray-400 mb-4">@{user.login}</p>
      <div className="flex justify-around text-sm text-gray-300 py-3 border-y border-gray-700">
        <p>📦 {user.public_repos} repos</p>
        <p>👥 {user.followers} followers</p>
        <p>⭐ {user.following} following</p>
      </div>
      <p className="mt-4 text-gray-400 text-sm">
        {user.bio || "No bio available."}
      </p>
      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-4 bg-[#0079ff] hover:bg-[#005cd1] text-white font-semibold px-5 py-2 rounded-md"
      >
        View Profile
      </a>
    </div>
  );
}
