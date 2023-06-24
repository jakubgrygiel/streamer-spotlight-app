interface IButtonProps {
  clickFn: () => void;
  text: string;
  isMain: boolean;
}

export default function Button({ clickFn, text, isMain }: IButtonProps) {
  function handleClick() {
    clickFn();
  }
  return (
    <button
      className={`h-10 px-4 rounded-lg font-semibold ${
        isMain ? "text-white bg-[var(--blue)]" : "bg-[var(--bg-light)]"
      } transition-opacity hover:opacity-70`}
    >
      {text}
    </button>
  );
}
