function UserCard({ userdata }) {
  const initials = userdata.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="card bg-base-100 shadow-sm border border-base-200 hover:shadow-md transition-shadow duration-200">
      <div className="card-body gap-4">
        {/* Top row — avatar + name + status */}
        <div className="flex items-center gap-4">
          <div className="avatar placeholder">
            <div className="bg-primary text-primary-content rounded-full w-12">
              <span className="text-sm font-semibold">{initials}</span>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="font-semibold text-base leading-tight">
              {userdata.name}
            </h2>
            <p className="text-sm text-base-content/60">
              {userdata.profession}
            </p>
          </div>

          <div
            className={`badge badge-sm ${userdata.isActive ? "badge-success" : "badge-ghost"}`}
          >
            {userdata.isActive ? "Active" : "Inactive"}
          </div>
        </div>

        <div className="divider my-0" />

        {/* Info rows */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-base-content/50">Age</span>
            <span className="font-medium">{userdata.age}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-base-content/50">Email</span>
            <span className="font-medium">{userdata.email}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {userdata.skills.map((skill) => (
            <span key={skill} className="badge badge-outline badge-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserCard;
