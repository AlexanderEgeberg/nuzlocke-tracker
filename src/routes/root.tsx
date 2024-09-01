import { Link } from "react-router-dom";

export default function Root() {
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
}
