export default function SignIn() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto flex items-center justify-center text-3xl mb-4">
            🛡️
          </div>
          <h1 className="text-4xl font-bold">Sign In</h1>
          <p className="text-slate-400 mt-2">Welcome back to RentPassport</p>
        </div>

        <div className="bg-white text-slate-900 rounded-3xl p-6 space-y-4">
          <input
            className="w-full border border-gray-200 rounded-xl p-4 outline-none"
            placeholder="Email address"
            type="email"
          />

          <input
            className="w-full border border-gray-200 rounded-xl p-4 outline-none"
            placeholder="Password"
            type="password"
          />

          <button className="w-full bg-blue-600 text-white rounded-xl p-4 font-semibold">
            Sign In
          </button>

          <p className="text-center text-gray-500 text-sm">
            Don&apos;t have an account? Create Account
          </p>
        </div>
      </div>
    </main>
  );
}
