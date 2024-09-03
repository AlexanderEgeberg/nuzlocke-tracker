import { Link } from "react-router-dom";

const Grave = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="rounded-lg border-4 border-yellow-300 p-8 text-center">
        <Link
          to="/game"
          className="text-lg font-bold text-yellow-300 hover:text-yellow-500"
        >
          Start Game
        </Link>
      </div>
    </div>
  );
};

export default Grave;
