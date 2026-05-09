import UserCard from "@/components/UserCard";

async function UsersPage() {
  const res = await fetch("http://localhost:4000/users");
  const data = await res.json();

  return (
    <div className="min-h-screen bg-base-200 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold">All Users</h1>
          <p className="text-base-content/50 text-sm mt-1">
            {data.length} members found
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((user) => (
            <UserCard key={user.id} userdata={user} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UsersPage;
