export default function AboutPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-yellow-300 via-orange-200 to-yellow-100 dark:from-yellow-800 dark:via-yellow-700 dark:to-yellow-600">
      <div className="absolute w-[500px] h-[500px] bg-yellow-400 dark:bg-yellow-300 rounded-full opacity-40 blur-3xl animate-pulse-slow" />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-900 dark:text-white drop-shadow-xl animate-fade-in">
          Chi sono
        </h1>
        <p className="text-lg text-gray-800 dark:text-gray-100 italic animate-fade-in">
          Solo et pensoso, i più deserti campi, voy misurando, a passi tardi e lenti
        </p>
      </div>
    </div>
  );
}
