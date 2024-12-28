import Image from "next/image";
import React from "react";
import EvolutionButton from "./EvolutionButton";

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
  evolutions: {
    name: string
  }[] | null
};

const PokemonCard = ({
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
  evolutions
}: PokemonCardProps) => {

  console.log(evolutions?.length, "THis is evolutions")

  return (
    <div className="relative flex flex-col w-full min-h-screen items-center gap-10 justify-center overflow-hidden rounded-lg shadow-lg bg-white p-4 m-2 md:flex-row md:gap-20">
      <div className="flex flex-col gap-5 max-sm:mt-20">
        <Image
          src={image}
          alt={name}
          className="object-contain"
          width={400}
          height={400}
          priority
        />
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            {name} #{number}
          </h2>
          <p className="text-xl text-gray-500 italic">{classification}</p>
        </div>
      </div>

      <div>
        <div className="mt-4 space-y-2 text-lg">
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

        <div className="mt-6">
          <h3 className="font-semibold text-xl mb-2">Types</h3>
          <div className="flex flex-wrap gap-3">
            {types.map((type) => (
              <span
                key={type}
                className="px-3 py-2 text-sm bg-green-200 text-green-800 rounded-full"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-xl mb-2">Resistant</h3>
          <div className="flex flex-wrap gap-3">
            {resistant.map((res) => (
              <span
                key={res}
                className="px-3 py-2 text-sm bg-blue-200 text-blue-800 rounded-full"
              >
                {res}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-xl mb-2">Weaknesses</h3>
          <div className="flex flex-wrap gap-3">
            {weaknesses.map((weak) => (
              <span
                key={weak}
                className="px-3 py-2 text-sm bg-red-200 text-red-800 rounded-full"
              >
                {weak}
              </span>
            ))}
          </div>
        </div>
      </div>

      {evolutions !== null ?
        <div className="absolute top-5 right-5">
          <EvolutionButton name={evolutions[0].name} />
        </div>
        :
        <p className="absolute top-5 right-5 px-5 py-2 bg-red-500 rounded-lg font-semibold">Final Evolution</p>
      }
    </div>
  );
};

export default PokemonCard;
