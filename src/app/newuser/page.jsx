"use client";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";

export default function CreateUserPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);

    const req = await fetch("http://localhost:4000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const res = await req.json();

    console.log(res, "created user");

    if (res.success) {
      alert("new user created successfullu");

      redirect("/users");
    }
  };

  const Field = ({ label, error, children }) => (
    <div className="flex flex-col gap-1.5">
      <span className="text-sm font-medium">{label}</span>
      {children}
      {error && <span className="text-error text-xs">{error.message}</span>}
    </div>
  );

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Create User</h1>
          <p className="text-base-content/50 text-sm mt-1">
            Fill in the details to add a new user.
          </p>
        </div>

        {/* Card */}
        <div className="card bg-base-100 border border-base-200 shadow-sm">
          <div className="card-body gap-4">
            {/* Name + Age side by side */}
            <div className="grid grid-cols-2 gap-4">
              <Field label="Full Name" error={errors.name}>
                <input
                  type="text"
                  placeholder="Amirul Islam"
                  className={`input w-full ${errors.name ? "input-error" : ""}`}
                  {...register("name", { required: "Required" })}
                />
              </Field>

              <Field label="Age" error={errors.age}>
                <input
                  type="number"
                  placeholder="19"
                  className={`input w-full ${errors.age ? "input-error" : ""}`}
                  {...register("age", {
                    required: "Required",
                    min: { value: 1, message: "Min age is 1" },
                  })}
                />
              </Field>
            </div>

            {/* Email */}
            <Field label="Email Address" error={errors.email}>
              <input
                type="email"
                placeholder="amirul@example.com"
                className={`input w-full ${errors.email ? "input-error" : ""}`}
                {...register("email", {
                  required: "Required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
            </Field>

            {/* Profession */}
            <Field label="Profession" error={errors.profession}>
              <input
                type="text"
                placeholder="Frontend Developer"
                className={`input w-full ${errors.profession ? "input-error" : ""}`}
                {...register("profession", { required: "Required" })}
              />
            </Field>

            {/* Password */}
            <Field label="Password" error={errors.password}>
              <input
                type="password"
                placeholder="••••••••"
                className={`input w-full ${errors.password ? "input-error" : ""}`}
                {...register("password", {
                  required: "Required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
              />
            </Field>

            <div className="divider my-0" />

            {/* Footer row — toggle + buttons */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="toggle toggle-success toggle-sm"
                  {...register("isActive")}
                />
                <span className="text-sm font-medium">Active User</span>
              </label>

              <div className="flex gap-2">
                <button type="button" className="btn btn-ghost btn-sm">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary btn-sm px-6"
                  onClick={handleSubmit(onSubmit)}
                >
                  Create User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
