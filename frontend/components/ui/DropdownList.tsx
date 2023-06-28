import { ReactNode } from "react";

interface IDropdownListProps {
  children: ReactNode;
}

export interface IItem {
  src: string;
  id: string;
}

export default function DropdownList({ children }: IDropdownListProps) {
  return (
    <div
      className={`absolute top-[72px] w-full p-3 bg-[var(--bg-light2)] rounded-lg`}
    >
      {children}
    </div>
  );
}
