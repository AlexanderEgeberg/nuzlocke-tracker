import PokemonNickname from "@/components/PokemonNickname";
import PokemonSelect from "@/components/PokemonSelect";
import PokemonStatus from "@/components/PokemonStatus";
import { pokemonRoutes } from "@/utils/constants";
import { Button } from "@headlessui/react";
import { useMemo, useState } from "react";

export type Pokemon = {
  id: number;
  routeId: number;
  name: string;
  nickname: string;
  status: "Alive" | "Dead";
};

type Route = (typeof pokemonRoutes)[number];

type GameState = {
  route: Route;
  pokemon?: Pokemon;
};

const Bulbasaur: Pokemon = {
  id: 1,
  routeId: 1,
  name: "Bulbasaur",
  nickname: "Nicky",
  status: "Alive",
};
const Charmander: Pokemon = {
  id: 4,
  routeId: 1,
  name: "Charmander",
  nickname: "Charchar",
  status: "Alive",
};
const Game = () => {
  const [box, setBox] = useState<Pokemon[]>([Charmander]);

  const gameState = useMemo<GameState[]>(() => {
    return pokemonRoutes.map((route) => ({
      route: route,
      pokemon: box.find((pokemon) => pokemon.routeId === route.id),
    }));
  }, [box]);

  return (
    <div className="flex flex-col gap-2">
      <Button onClick={() => setBox(() => [Bulbasaur])}>Test Button</Button>
      {gameState.map((state) => (
        <Row key={state.route.id} gameState={state} />
      ))}
    </div>
  );
};

const Row = ({ gameState }: { gameState: GameState }) => {
  return (
    <div
      key={gameState.route.id}
      className="flex h-full min-h-12 flex-row items-center gap-3"
    >
      <span className="flex min-w-20 max-w-20 text-left">
        {gameState.route.name}
      </span>
      <div className="flex w-max ">
        <PokemonSelect pokemon={gameState.pokemon} />
      </div>

      <PokemonStatus />
      <PokemonNickname
        value={gameState.pokemon?.nickname ?? gameState.pokemon?.name}
      />

      <Button>Add To team</Button>
      <Button>Kill</Button>
    </div>
  );
};

export default Game;