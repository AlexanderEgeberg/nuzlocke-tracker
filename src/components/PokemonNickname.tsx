import { Input } from "@headlessui/react";

const PokemonNickname = ({
  value,
}: {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <Input
      className="rounded-lg border-none bg-white/5 px-8 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
      placeholder="Nickname"
      defaultValue={value}
    />
  );
};

export default PokemonNickname;
