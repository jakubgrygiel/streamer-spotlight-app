interface IRatingProps {
  id: string;
  rate: number;
}

export default function Rating({ id, rate }: IRatingProps) {
  return (
    <div className="flex justify-between items-center gap-2">
      <button aria-label="like" className=" h-6 w-6">
        <img
          src="assets/icons/icon-thumb-up.svg"
          alt="like icon"
          className=" h-6 w-6"
        />
      </button>
      <span className="font-bold text-center w-8">{rate}</span>
      <button aria-label="dislike" className=" h-6 w-6">
        <img
          src="assets/icons/icon-thumb-down.svg"
          alt="like icon"
          className=" h-6 w-6"
        />
      </button>
    </div>
  );
}
