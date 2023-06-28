interface IRatingProps {
  id?: string;
  rate?: number;
  rateFunc: (val: -1 | 1, id?: string) => void;
}

export default function Rating({ id, rate, rateFunc }: IRatingProps) {
  return (
    <div className="flex justify-between items-center gap-2">
      <button
        aria-label="like"
        className=" h-6 w-6"
        onClick={() => rateFunc(1, id)}
      >
        <img
          src="assets/icons/icon-thumb-up.svg"
          alt="like icon"
          className=" h-6 w-6"
        />
      </button>
      {rate !== undefined ? (
        <span className="font-bold text-center w-8 animate-fade animate-duration-800">
          {rate}
        </span>
      ) : (
        <span className="h-4 w-4 mx-2 bg-[var(--text-main)] rounded-lg animate-pulse"></span>
      )}
      <button
        aria-label="dislike"
        className=" h-6 w-6"
        onClick={() => rateFunc(-1, id)}
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
