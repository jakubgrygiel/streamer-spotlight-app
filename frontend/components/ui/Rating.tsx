import useDataById, { TVote } from "@/hooks/useDataById";

interface IRatingProps {
  id?: string;
  votes?: number;
}

export default function Rating({ id, votes }: IRatingProps) {
  const { updateData } = useDataById(id);

  function handleClick(type: TVote) {
    updateData("votes", type);
  }

  return (
    <div className="flex justify-between items-center gap-2">
      <button
        aria-label="like"
        className=" h-6 w-6 transition-opacity hover:opacity-70"
        onClick={() => handleClick("upvote")}
      >
        <img
          src="assets/icons/icon-thumb-up.svg"
          alt="like icon"
          className=" h-6 w-6"
        />
      </button>
      {votes !== undefined ? (
        <span className="font-bold text-center w-8 animate-fade animate-duration-800">
          {votes}
        </span>
      ) : (
        <span className="h-4 w-4 mx-2 bg-[var(--text-main)] rounded-lg animate-pulse"></span>
      )}
      <button
        aria-label="dislike"
        className=" h-6 w-6 transition-opacity hover:opacity-70"
        onClick={() => handleClick("downvote")}
      >
        <img
          src="assets/icons/icon-thumb-down.svg"
          alt="like icon"
          className=" h-6 w-6"
        />
      </button>
    </div>
  );
}
