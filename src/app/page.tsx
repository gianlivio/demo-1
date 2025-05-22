import { Card } from "@/components/Card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center px-6 bg-[var(--background)] text-[var(--foreground)]">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6">
        Gianlivio – Web Developer
      </h1>

      <p className="text-lg text-center max-w-2xl mb-4 leading-relaxed">
        Questo è il punto di partenza di un nuovo progetto basato su React, TypeScript e Tailwind CSS. Sto costruendo, sperimentando e imparando ogni giorno. Al mio fianco c’è Marco, una guida tecnica e un partner di fiducia in questo percorso di crescita professionale.
      </p>

      <p className="text-md text-center max-w-xl mb-6 text-[var(--foreground)]/80">
        Tecnologie attuali, idee potenti e tanta voglia di fare la differenza — una riga (di codice) dopo l'altra.
      </p>

      <div className="mt-4 flex flex-wrap gap-4">
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[var(--foreground)] text-[var(--background)] px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          Scopri Next.js
        </a>
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[var(--foreground)] text-[var(--background)] px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          Tailwind CSS
        </a>
      </div>


      <Card title="Demo-prova" description="componente test importato in homepage" imageSrc="/pizza.png" />

      <footer className="mt-16 text-sm text-[var(--foreground)]/70">
        Progetto avviato da Gianlivio, con il supporto di Marco – 2025
      </footer>
    </div>
  );
}
