import { useRef, useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

interface IPortalProps {
  children?: ReactNode;
}

export default function Portal({ children }: IPortalProps) {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
    setMounted(true);
  }, []);

  return mounted && ref.current && children
    ? createPortal(
        <div className="z-50 fixed inset-0 h-full-dyn flex justify-center items-center">
          {children}
        </div>,
        ref.current
      )
    : null;
}
