interface IRatingProps {
  id: string;
  rate: number;
}

export default function Rating({ id, rate }: IRatingProps) {
  return (
    <div className="flex items-center gap-4">
      <button aria-label="like">
        <img src="assets/icons/icon-thumb-up.svg" alt="like icon" />
      </button>
      <span className="font-bold">{rate}</span>
      <button aria-label="dislike">
        <img src="assets/icons/icon-thumb-down.svg" alt="like icon" />
      </button>
    </div>
  );
}
