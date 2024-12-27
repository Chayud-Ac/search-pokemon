import Image from "next/image";
import React from "react";
import Link from "next/link";

export type PokemonCardProps = {
  id: string;
  number: string;
  name: string;
  weight: {
    minimum: string;
    maximum: string;
  };
  height: {
    minimum: string;
    maximum: string;
  };
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  image: string;
};

const PokemonCard = ({
  id,
  number,
  name,
  weight,
  height,
  classification,
  types,
  resistant,
  weaknesses,
  fleeRate,
  maxCP,
  maxHP,
  image,
} : PokemonCardProps) => {

  console.log(id , name)

  return (
    <Link href={`/pokedex/${id}`} className="w-full max-w-xs overflow-hidden rounded-lg shadow-lg bg-white p-4 m-2 hover:scale-[1.02] hover:shadow-md transition-all duration-300">

      <div className="flex justify-center mb-4">
        <Image
          src={image}
          alt={name}
          className="h-auto w-auto object-contain"
          width={100}
          height={100}
        />
      </div>


      <div className="text-center">
        <h2 className="text-xl font-bold">
          {name} #{number}
        </h2>
        <p className="text-gray-500 italic">{classification}</p>
      </div>


      <div className="mt-4 space-y-1 text-sm">
        <p>
          <span className="font-semibold">Weight:</span>{" "}
          {weight.minimum} - {weight.maximum}
        </p>
        <p>
          <span className="font-semibold">Height:</span>{" "}
          {height.minimum} - {height.maximum}
        </p>
        <p>
          <span className="font-semibold">Max CP:</span> {maxCP}
        </p>
        <p>
          <span className="font-semibold">Max HP:</span> {maxHP}
        </p>
        <p>
          <span className="font-semibold">Flee Rate:</span> {fleeRate}
        </p>
      </div>


      <div className="mt-4">
        <h3 className="font-semibold mb-1">Types</h3>
        <div className="flex flex-wrap gap-2">
          {types.map((type) => (
            <span
              key={type}
              className="px-2 py-1 text-xs bg-green-200 text-green-800 rounded-full"
            >
              {type}
            </span>
          ))}
        </div>
      </div>


      <div className="mt-4">
        <h3 className="font-semibold mb-1">Resistant</h3>
        <div className="flex flex-wrap gap-2">
          {resistant.map((res) => (
            <span
              key={res}
              className="px-2 py-1 text-xs bg-blue-200 text-blue-800 rounded-full"
            >
              {res}
            </span>
          ))}
        </div>
      </div>


      <div className="mt-4">
        <h3 className="font-semibold mb-1">Weaknesses</h3>
        <div className="flex flex-wrap gap-2">
          {weaknesses.map((weak) => (
            <span
              key={weak}
              className="px-2 py-1 text-xs bg-red-200 text-red-800 rounded-full"
            >
              {weak}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
