import CosmicGallery from "./components/CosmicGallery";

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-cyan-500/30">
      <nav className="p-6 border-b border-white/5 flex justify-between items-center bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="text-2xl font-bold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          DEEPFIELD
        </div>
        <div className="text-xs font-mono text-slate-500">STATUS: ONLINE</div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cosmic Calendar</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            If the 13.8 billion year history of the universe were compressed into a single year...
          </p>
        </header>

        <CosmicGallery />
      </main>
    </div>
  );
}

export default App;
