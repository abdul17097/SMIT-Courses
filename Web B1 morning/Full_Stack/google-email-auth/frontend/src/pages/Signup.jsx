import GoogleButton from "./GoogleButton";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log(data);
  };

  const handleGoogleSignup = () => {
    console.log("Google Signup");
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-center mb-2">Sign Up</h2>

      <p className="text-center text-gray-500 mb-6">Create your account</p>

      <GoogleButton text="Sign up with Google" onClick={handleGoogleSignup} />

      <div className="flex items-center my-6">
        <div className="flex-1 border-t" />
        <span className="px-3 text-gray-400 text-sm">OR</span>
        <div className="flex-1 border-t" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Full Name</label>

          <input
            type="text"
            name="name"
            required
            placeholder="John Doe"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>

          <input
            type="email"
            name="email"
            required
            placeholder="john@example.com"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Password</label>

          <input
            type="password"
            name="password"
            required
            placeholder="********"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
