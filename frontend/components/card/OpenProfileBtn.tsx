import Link from "next/link";

interface IOpenProfileBtnProps {
  id: string;
}

export default function OpenProfileBtn({ id }: IOpenProfileBtnProps) {
  return (
    <Link href={`/${id}`} aria-label="profile details">
      <img src="assets/icons/icon-arrow-right.svg" alt="open profile icon" />
    </Link>
  );
}
