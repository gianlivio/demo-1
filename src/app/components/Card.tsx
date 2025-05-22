import Image from "next/image";

export interface CardProps {
  imageAlt?: string;
  title: string;
  description: string;
  imageSrc: string;
}

export function Card({ title, description, imageSrc, imageAlt }: CardProps) {
  return (
    <div className="max-w-sm mx-auto mt-8 rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-gray-900 transform transition duration-300 hover:scale-105">
      <div className="flex justify-center mt-6">
        <Image
          src={imageSrc}
          alt={imageAlt || "Pizza"}
          width={160}
          height={160}
          className="rounded-full border-4 border-yellow-500 shadow-md"
        />
      </div>
      <div className="px-6 py-4 text-center">
        <h2 className="font-extrabold text-2xl text-gray-900 dark:text-yellow-400 mb-2">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>
      <div className="px-6 pb-6 flex justify-center">
        <button className="bg-yellow-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 transition">
          Scopri di più
        </button>
      </div>
    </div>
  );
}
