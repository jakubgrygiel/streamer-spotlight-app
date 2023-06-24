import Link from "next/link";
import { useRouter } from "next/router";
import AddNewProfileBtn from "./AddNewProfileBtn";
import GoBackLink from "./GoBackLink";

export default function Header() {
  const router = useRouter();
  const isHomePage = router.pathname === "/" ? true : false;

  return (
    <header className="flex justify-center items-center px-12 py-3 w-full">
      <div className="flex justify-between items-center w-full max-w-[1440px] p-6 bg-[var(--bg-secondary)] rounded-xl">
        <img src="assets/icons/logo.svg" alt="app logo" />
        <nav>{isHomePage ? <AddNewProfileBtn /> : <GoBackLink />}</nav>
      </div>
    </header>
  );
}
