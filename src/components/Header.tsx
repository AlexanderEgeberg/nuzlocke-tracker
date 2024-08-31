import PokemonTeam from "@/components/PokemonTeam";
import { SiPokemon } from "react-icons/si";
import { GrPowerReset } from "react-icons/gr";
import { IoSave } from "react-icons/io5";

const Header = () => {
  return (
    <header
      className="
        sticky left-0 top-0 m-0
        flex h-16 
        w-screen text-white
        shadow-lg
      "
    >
      <div className="mx-auto flex w-screen max-w-screen-lg flex-row px-4 py-6">
        <LeftSection />
        <CenterSection />
        <RightSection />
      </div>
    </header>
  );
};

const LeftSection = () => {
  return (
    <section className="flex w-1/3 flex-none items-center gap-3">
      <SiPokemon size={80} className="text-yellow-300" />
      <span>Fire red</span>
      <GrPowerReset
        className="cursor-pointer text-unfocused transition-transform duration-500 ease-linear hover:rotate-[360deg] hover:text-focused"
        size={24}
      />
      <IoSave
        size={24}
        className="cursor-pointer text-unfocused hover:text-focused"
      />
    </section>
  );
};

const CenterSection = () => {
  return (
    <section className="flex grow items-center">
      <PokemonTeam />
    </section>
  );
};

const RightSection = () => {
  return (
    <section className="flex w-1/3 flex-none items-center justify-end gap-3">
      {/* <span className="cursor-pointer text-unfocused hover:text-focused">
        Darkmode toggle
      </span> */}
      <span className="cursor-pointer text-unfocused hover:text-focused">
        Game
      </span>
      <span className="cursor-pointer text-unfocused hover:text-focused">
        Box
      </span>
      <span className="cursor-pointer text-unfocused hover:text-focused">
        Grave
      </span>
    </section>
  );
};

export default Header;
