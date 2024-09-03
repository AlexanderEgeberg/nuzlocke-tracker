import { Input } from "@headlessui/react";

const PokemonNickname = ({
  value,
}: {
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return <Input placeholder="Nickname" />;
};

export default PokemonNickname;
