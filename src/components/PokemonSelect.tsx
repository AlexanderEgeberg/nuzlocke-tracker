import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import classNames from "classnames";
import { useMemo, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { pokemons } from "@/utils/constants.ts";
import { Pokemon } from "src/routes/Game";

const PokemonSelect = ({ pokemon }: { pokemon?: Pokemon }) => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(pokemon);

  const filteredPokemons =
    query === ""
      ? pokemons
      : pokemons.filter((pokemon) => {
          return pokemon.name.toLowerCase().includes(query.toLowerCase());
        });

  const first5Pokemons = useMemo(
    () => filteredPokemons.slice(0, 5) ?? [],
    [filteredPokemons]
  );

  return (
    <div className="z-10">
      <Combobox<Pokemon | null>
        immediate
        value={selected}
        onChange={(value: Pokemon | null) => {
          if (value) {
            setSelected(value);
            setQuery(value.name);
          }
        }}
      >
        <div className="relative z-20">
          <div className="absolute -left-1 top-1/2 size-12 w-full -translate-y-1/2 pl-[1.35rem] ">
            {selected && <PokemonIcon id={selected.id} />}
          </div>
          <ComboboxInput
            className={classNames(
              "w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-[4.5rem] text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
            displayValue={(pokemon: Pokemon) => pokemon?.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            <IoChevronDown className="size-4 fill-white/60 group-data-[hover]:fill-white" />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={classNames(
            "w-[var(--input-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
          )}
        >
          {first5Pokemons.map((pokemon) => (
            <ComboboxOption
              key={pokemon.id}
              value={pokemon}
              className="group flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10"
            >
              <PokemonIcon id={pokemon.id} />
              <div className="text-sm/6 text-white">{pokemon.name}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
};

const PokemonIcon = ({ id }: { id: number }) => {
  return (
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      //src={`https://img.pokemondb.net/sprites/black-white/normal/${pokemon.name.toLocaleLowerCase()}.png`}
      alt="Pokemon Logo"
      className="size-12"
    />
  );
};

export default PokemonSelect;
