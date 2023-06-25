import Link from "next/link";

export default function GoBackLink() {
  return (
    <Link
      href="/"
      className="flex justify-center w-full h-10 px-4 py-2 font-semibold bg-[var(--bg-light2)] rounded-lg transition-opacity hover:opacity-70"
    >
      Go back
    </Link>
  );
}
