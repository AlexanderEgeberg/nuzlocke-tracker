import { Select } from "@headlessui/react";

const PokemonStatus = () => {
  return (
    <Select
      name="status"
      className="min-h-10 border data-[focus]:bg-blue-100 data-[hover]:shadow"
      aria-label="Project status"
    >
      <option value="Alive">Alive</option>
      <option value="Dead">Dead</option>
    </Select>
  );
};

export default PokemonStatus;
