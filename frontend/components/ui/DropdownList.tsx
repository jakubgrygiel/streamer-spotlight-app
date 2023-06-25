import { FormEvent, ReactNode } from "react";

interface IDropdownListProps {
  children: ReactNode;
}

export interface IItem {
  src: string;
  id: string;
}

export default function DropdownList({ children }: IDropdownListProps) {
  function handleClick(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <div
      className={`absolute top-[72px] w-full p-3 bg-[var(--bg-light2)] rounded-lg`}
    >
      {children}
    </div>
  );
}
//   ${
//     items.length > 6
//       ? "grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] gap-2"
//       : "flex flex-col"
//   }
