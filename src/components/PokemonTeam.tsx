import { MdOutlineCatchingPokemon } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import { MdOutlineClear } from "react-icons/md";
import { ReactNode } from "react";
import classNames from "classnames";

const PokemonTeam: React.FC = () => {
  return (
    <>
      <PokemonBall icon={<MdOutlineCatchingPokemon size={32} />} />
      <PokemonBall icon={<MdOutlineCatchingPokemon size={32} />} />
      <PokemonBall icon={<MdOutlineCatchingPokemon size={32} />} />
      <PokemonBall icon={<MdOutlineCatchingPokemon size={32} />} />
      <PokemonBall icon={<MdOutlineCatchingPokemon size={32} />} />
      <PokemonBall icon={<MdOutlineCatchingPokemon size={32} />} />
      <MdOutlineClear
        className={classNames(
          "size-4 cursor-pointer text-unfocused duration-100 ease-linear hover:scale-150 hover:text-focused hover:transition-all"
        )}
      />
    </>
  );
};

const PokemonBall: React.FC<{ icon: ReactNode }> = ({ icon }) => {
  return (
    <div
      className={classNames(
        "group relative flex size-12 cursor-pointer",
        "items-center justify-center",
        "text-unfocused transition-transform duration-200",
        "ease-linear",
        "hover:text-focused"
      )}
    >
      <span
        className={classNames(
          "group-hover:rotate-[180deg] transition-all duration-300",
          "group-hover:bg-red-700 rounded-full"
        )}
      >
        {icon}
      </span>
      <TiPlus
        className={classNames(
          "absolute right-1 top-0",
          "scale-0 font-bold",
          "text-focused transition-all duration-200 ease-linear",
          "group-hover:scale-100"
        )}
      />
    </div>
  );
};

export default PokemonTeam;
