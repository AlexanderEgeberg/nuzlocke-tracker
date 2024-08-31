import { MdOutlineCatchingPokemon } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import { MdOutlineClear } from "react-icons/md";
import { ReactNode } from "react";

const PokemonTeam: React.FC = () => {
  return (
    <>
      <Pokemon icon={<MdOutlineCatchingPokemon size={32} />} />
      <Pokemon icon={<MdOutlineCatchingPokemon size={32} />} />
      <Pokemon icon={<MdOutlineCatchingPokemon size={32} />} />
      <Pokemon icon={<MdOutlineCatchingPokemon size={32} />} />
      <Pokemon icon={<MdOutlineCatchingPokemon size={32} />} />
      <Pokemon icon={<MdOutlineCatchingPokemon size={32} />} />
      <MdOutlineClear className="size-4 cursor-pointer text-unfocused duration-100 ease-linear hover:size-6 hover:text-focused hover:transition-all" />
    </>
  );
};

const Pokemon: React.FC<{ icon: ReactNode }> = ({ icon }) => {
  return (
    <div
      className="
        group relative flex size-12 cursor-pointer
        items-center justify-center
        text-unfocused transition-all duration-300
        ease-linear
        hover:text-focused
      "
    >
      {icon}
      <TiPlus
        className="absolute right-1 top-0
          scale-0 font-bold 
          text-focused transition-all duration-300 ease-linear
          group-hover:scale-100
        "
      />
    </div>
  );
};

export default PokemonTeam;
