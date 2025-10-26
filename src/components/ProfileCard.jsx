export default function ProfileCard({ user }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center mb-6">
      <img
        src={user.avatar_url}
        alt="avatar"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold">{user.name || "No Name"}</h2>
      <p className="text-gray-600">@{user.login}</p>
      <p className="mt-2 text-sm">{user.bio || "No bio available."}</p>
      <div className="flex justify-around mt-4 text-sm">
        <p>Repos: {user.public_repos}</p>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
      </div>
      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 mt-4 inline-block"
      >
        View Profile
      </a>
    </div>
  );
}
