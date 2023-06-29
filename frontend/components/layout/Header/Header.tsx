import { useRouter } from "next/router";
import AddNewProfileBtn from "./AddNewProfileBtn";
import GoBackLink from "./GoBackLink";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const isHomePage = router.pathname === "/" ? true : false;

  return (
    <header className="flex justify-center items-center px-12 py-3 w-full md:px-3">
      <nav className="flex justify-between items-center w-full max-w-[1440px] p-6 bg-[var(--bg-secondary)] rounded-xl">
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-70"
        >
          <img src="assets/icons/logo.svg" alt="app logo" />
          <img
            src="assets/icons/logo-text.svg"
            alt="app name StreamRate"
            className="md:hidden"
          />
        </Link>
        <div className=" w-44">
          {isHomePage ? <AddNewProfileBtn /> : <GoBackLink />}
        </div>
      </nav>
    </header>
  );
}
