import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  ListboxSelectedOption,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import { IoChevronDown } from "react-icons/io5";

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
  const [selectedStatus, setSelectedStatus] = useState();

  return (
    <div className="relative">
      <MyListbox
        value={selectedStatus}
        onChange={setSelectedStatus}
        placeholder="Status"
      >
        {pokemonStatuses.map((status) => (
          <MyListboxOption
            key={status}
            value={status}
            className="border bg-black data-[focus]:bg-blue-100 data-[hover]:shadow"
          >
            {status}
          </MyListboxOption>
        ))}
      </MyListbox>
      <IoChevronDown className="absolute inset-y-0 right-2 size-4 self-center " />
    </div>
  );
}

//TODO
function MyListbox({ placeholder, children, ...props }) {
  return (
    <Listbox {...props}>
      <ListboxButton className="rounded-lg border-none bg-white/5 px-8 py-1.5 text-sm/6 text-white ">
        <ListboxSelectedOption
          options={children}
          placeholder={<span className="opacity-50">{placeholder}</span>}
        />
      </ListboxButton>
      <ListboxOptions anchor="bottom">{children}</ListboxOptions>
    </Listbox>
  );
}

function MyListboxOption({ children, ...props }) {
  return (
    <ListboxOption as={Fragment} {...props}>
      {({ selectedOption }) => {
        return selectedOption ? (
          children
        ) : (
          <div className="data-[focus]:bg-blue-100">{children}</div>
        );
      }}
    </ListboxOption>
  );
}

export default PokemonStatus;
