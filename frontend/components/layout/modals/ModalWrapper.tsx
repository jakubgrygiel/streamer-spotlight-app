import { UiCtx } from "@/context/ui-context";
import { useContext, useEffect } from "react";

interface IModalWrapperProps {
  children: React.ReactNode;
}

export default function ModalWrapper({ children }: IModalWrapperProps) {
  const { closeModal } = useContext(UiCtx);

  useEffect(() => {
    function closeModalOnEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeModal();
      }
    }
    window.addEventListener("keydown", closeModalOnEsc);
    return () => {
      window.removeEventListener("keydown", closeModalOnEsc);
    };
  }, []);

  return (
    <div className="absolute inset-0 flex justify-center items-center p-6 sm:p-3">
      <div
        onClick={closeModal}
        className="absolute inset-0 bg-[var(--bg-modal-backdrop)] animate-fade animate-duration-500"
      ></div>
      <div className="flex justify-center items-center w-full animate-fade animate-duration-800">
        {children}
      </div>
    </div>
  );
}
