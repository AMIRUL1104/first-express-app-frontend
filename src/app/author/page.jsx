const AuthorPage = async () => {
  const res = await fetch("http://localhost:4000/author");
  const data = await res.json();

  const initials = data.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const rows = [
    { label: "Age", value: data.age },
    { label: "Profession", value: data.profession },
    { label: "Currently learning", value: data.learning },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card bg-base-100 shadow-md w-full max-w-sm">
        <div className="card-body items-center text-center gap-3">
          {/* Avatar */}
          <div className="avatar placeholder">
            <div className="bg-primary text-primary-content rounded-full w-16">
              <span className="text-xl flex items-center justify-center font-medium">
                {initials}
              </span>
            </div>
          </div>

          {/* Name */}
          <h2 className="card-title text-xl font-medium">{data.name}</h2>

          {/* Badge */}
          <div className="badge badge-success badge-soft">
            {data.profession}
          </div>

          <div className="divider my-1" />

          {/* Rows */}
          <div className="w-full text-left space-y-1">
            {rows.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between py-2 border-b border-base-200 last:border-none"
              >
                <span className="text-sm text-base-content/60">
                  {row.label}
                </span>
                <span className="text-sm font-medium">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorPage;
