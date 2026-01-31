function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="w-full px-6 py-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-wide">
            Docs Without Chaos
          </h1>
          <span className="text-sm text-white/60">DWC</span>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: Logo + Text */}
        <div className="space-y-6">
          <img src="/assets/dwc-logo.png" alt="DWC Logo" className="w-56" />

          <h2 className="text-4xl font-bold leading-tight">
            Real-time documents, <br />
            without the chaos
          </h2>

          <p className="text-white/70 max-w-md">
            A structured collaboration platform designed to reduce conflicts,
            scale reads, and bring intent-based editing to real-time documents.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-teal-500 text-black font-semibold rounded-md hover:bg-teal-400 transition">
              Get Started
            </button>
            <button className="px-6 py-3 border border-white/20 rounded-md hover:bg-white/5 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right: Side Image */}
        <div className="relative">
          <img
            src="/assets/dwc-side-image.png"
            alt="DWC Preview"
            className="rounded-xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-linear-to-tr from-black/40 to-transparent rounded-xl" />
        </div>
      </main>
    </div>
  );
}

export default App;
