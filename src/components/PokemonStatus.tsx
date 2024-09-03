import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  ListboxSelectedOption,
} from "@headlessui/react";
import { IoChevronDown } from "react-icons/io5";
import classNames from "classnames";

export type PokemonStatusType =
  | "Captured"
  | "Dead"
  | "Missed"
  | "Gifted"
  | "Shiny"
  | "Traded"
  | "Trash";

const pokemonStatuses: PokemonStatusType[] = [
  "Captured",
  "Dead",
  "Missed",
  "Gifted",
  "Shiny",
  "Traded",
  "Trash",
];

function PokemonStatus() {
  return (
    <div className="relative">
      <MyListbox placeholder="Status">
        {pokemonStatuses.map((status) => (
          <MyListboxOption key={status} value={status}>
            {status}
          </MyListboxOption>
        ))}
      </MyListbox>
      <IoChevronDown className="absolute inset-y-0 right-2 size-4 self-center " />
    </div>
  );
}

//TODO
function MyListbox({
  placeholder,
  children,
  ...props
}: {
  placeholder: string;
  children: React.ReactNode;
}) {
  return (
    <Listbox {...props}>
      <ListboxButton className="rounded-lg border-none bg-white/5 px-8 py-1.5 text-sm/6 text-white ">
        <ListboxSelectedOption
          options={children}
          placeholder={<span className="opacity-50">{placeholder}</span>}
        />
      </ListboxButton>
      <ListboxOptions
        className={classNames(
          "z-30",
          "w-[var(--input-width)] rounded-xl border border-white/5 bg-background p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
        )}
        anchor="bottom"
      >
        {children}
      </ListboxOptions>
    </Listbox>
  );
}

function MyListboxOption({
  children,
  ...props
}: {
  value: PokemonStatusType;
  children: React.ReactNode;
}) {
  return (
    <ListboxOption
      {...props}
      className=" data-[focus]:bg-white/5 data-[hover]:shadow"
    >
      <div className="data-[focus]:bg-blue-100">{children}</div>
    </ListboxOption>
  );
}

export default PokemonStatus;
