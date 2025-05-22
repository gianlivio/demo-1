export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-black text-white overflow-hidden">
      {/* Texture artistica online */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay bg-cover bg-center pointer-events-none" />
      
      {/* Gradient futuristico */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-700/20 via-pink-600/20 to-indigo-700/20 animate-pulse-slow blur-2xl" />

      <h1 className="text-5xl font-bold relative z-10 mb-4 text-pink-400 animate-fade-in">
        I miei progetti
      </h1>
      <p className="text-lg text-white/90 z-10 animate-float">
        Conquistare il mondo
      </p>
    </div>
  );
}


