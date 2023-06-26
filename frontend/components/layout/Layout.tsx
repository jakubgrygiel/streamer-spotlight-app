import { Poppins } from "next/font/google";
import ModalsWrapper from "./modals/ModalsWrapper";
import Header from "./header/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className={`${poppins.className}`}>
      <Header />
      <main className="flex justify-center items-center px-12 w-full">
        <div className="flex justify-between items-center w-full max-w-[1440px]">
          {children}
        </div>
      </main>
      <ModalsWrapper />
    </div>
  );
}
