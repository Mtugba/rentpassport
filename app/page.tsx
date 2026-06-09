export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">RentPassport</h1>
            <p className="text-slate-400">Trust before you rent.</p>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-2xl">
            🛡️
          </div>
        </div>

        <div className="bg-blue-600 rounded-3xl p-6 mb-5">
          <div className="bg-white rounded-3xl p-4 mb-5">
  <p className="text-slate-500 text-sm mb-2">Search rental trust profile</p>
  <input
    className="w-full text-slate-900 outline-none text-lg"
    placeholder="Enter address, landlord or tenant..."
  />
</div><div className="bg-white text-slate-900 rounded-3xl p-5 mb-5">
  <div className="flex justify-between items-start">
    <div>
      <p className="text-sm text-gray-500">Property Passport</p>
      <h2 className="font-bold text-xl">Warsaw, Marszałkowska 10</h2>
      <p className="text-gray-500 mt-1">Verified rental address</p>
    </div>
    <span className="bg-emerald-100 text-emerald-700 text-sm px-3 py-1 rounded-full">
      Verified
    </span>
  </div>

  <div className="grid grid-cols-3 gap-3 mt-5 text-center">
    <div className="bg-slate-100 rounded-2xl p-3">
      <p className="font-bold">4.8</p>
      <p className="text-xs text-gray-500">Rating</p>
    </div>
    <div className="bg-slate-100 rounded-2xl p-3">
      <p className="font-bold">24</p>
      <p className="text-xs text-gray-500">Reviews</p>
    </div>
    <div className="bg-slate-100 rounded-2xl p-3">
      <p className="font-bold">92</p>
      <p className="text-xs text-gray-500">Trust</p>
    </div>
  </div>
</div>
          <p className="text-blue-100 text-sm">Your Trust Score</p>
          <h2 className="text-5xl font-bold mt-2">82</h2>
          <p className="text-blue-100 mt-2">Verified profile • Good rental history</p>
        </div>

        <div className="grid gap-4">
          <div className="bg-white text-slate-900 rounded-3xl p-5">
            <div className="text-3xl mb-2">🏠</div>
            <h2 className="font-bold text-xl">Property Search</h2>
            <p className="text-gray-500">Search addresses, landlords and reviews.</p>
          </div>

          <div className="bg-white text-slate-900 rounded-3xl p-5">
            <div className="text-3xl mb-2">👤</div>
            <h2 className="font-bold text-xl">Tenant Passport</h2>
            <p className="text-gray-500">Build your trusted renter profile.</p>
          </div>

          <div className="bg-white text-slate-900 rounded-3xl p-5">
            <div className="text-3xl mb-2">🛡️</div>
            <h2 className="font-bold text-xl">Landlord Passport</h2>
            <p className="text-gray-500">Check landlord reputation before renting.</p>
          </div>

          <div className="bg-white text-slate-900 rounded-3xl p-5">
            <div className="text-3xl mb-2">⭐</div>
            <h2 className="font-bold text-xl">Reviews</h2>
            <p className="text-gray-500">Read real rental experiences.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
