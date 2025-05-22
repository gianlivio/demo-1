import Image from "next/image";


// Definizione dell'interfaccia per le props
export interface CardProps {

  imageAlt?: string | undefined;
  title: string;
  description: string;
  imageSrc: string;
  
}

// Funzione del componente Card
export function Card({ title, description, imageSrc, imageAlt }: CardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <img className="w-1[20px] h-auto" src={imageSrc} alt={imageAlt} width={120} height={120} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{title}</div>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-400">
          Learn More
        </button>
      </div>
    </div>
  );
}
