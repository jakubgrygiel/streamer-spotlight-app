import { createContext, useState } from "react";

interface IUiCtxProviderProps {
  children: React.ReactNode;
}

interface IUiCtx {
  addNewProfileModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const UiCtx = createContext<IUiCtx>({
  addNewProfileModal: false,
  openModal: () => {},
  closeModal: () => {},
});

export function UiCtxProvider({ children }: IUiCtxProviderProps) {
  const [addNewProfileModal, setAddNewProfileModal] = useState(false);

  function openModal() {
    setAddNewProfileModal(true);
    const body = document.querySelector("body");
    body!.style.overflow = "hidden";
  }

  function closeModal() {
    setAddNewProfileModal(false);
    const body = document.querySelector("body");
    body!.style.overflow = "auto";
  }

  const ctx: IUiCtx = {
    addNewProfileModal,
    openModal,
    closeModal,
  };

  return <UiCtx.Provider value={ctx}>{children}</UiCtx.Provider>;
}
