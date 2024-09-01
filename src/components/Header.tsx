import PokemonTeam from "@/components/PokemonTeam";
import { SiPokemon } from "react-icons/si";
import { GrPowerReset } from "react-icons/gr";
import { IoSave } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";

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
        className="cursor-pointer text-unfocused transition-transform duration-500 ease-in-out hover:rotate-[360deg] hover:text-focused"
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
  const location = useLocation();

  const menuList = [
    {
      name: "Game",
      href: "/game",
      to: "/game",
    },
    {
      name: "Box",
      href: "/game/box",
      to: "/game/box",
    },
    {
      name: "Grave",
      href: "/game/grave",
      to: "/game/grave",
    },
  ];

  const activeIndex = menuList.findIndex((i) => i.href === location.pathname);

  return (
    <section>
      <nav className="flex w-1/3 flex-none items-center justify-end gap-3">
        {menuList.map((item, index) => (
          <NavLink
            key={item.name}
            to={item.to}
            className={classNames({
              "cursor-pointer hover:text-focused": true,
              "text-unfocused": activeIndex !== index,
              "text-focused": activeIndex === index,
              "w-max": true,
            })}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
      <div className="relative h-4 w-1/3">
        <div
          className="relative right-full h-0.5 w-full bg-yellow-300 transition-all duration-200 ease-in"
          style={{ transform: `translate(${(activeIndex - 1) * 100}%)` }}
        ></div>
      </div>
    </section>
  );
};

export default Header;
