import { Input } from "@headlessui/react";

const PokemonNickname = ({
  value,
}: {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return <Input placeholder="Nickname" defaultValue={value} />;
};

export default PokemonNickname;
