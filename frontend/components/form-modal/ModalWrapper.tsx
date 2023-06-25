interface IModalWrapperProps {
  children: React.ReactNode;
}

export default function ModalWrapper({ children }: IModalWrapperProps) {
  function closeModal() {}
  return (
    <div className="absolute inset-0 flex justify-center items-center p-3">
      <div
        onClick={closeModal}
        className="absolute inset-0 bg-[var(--bg-modal-backdrop)] animate-fade animate-duration-500"
      ></div>
      <div className="relative flex justify-center w-full animate-fade animate-duration-800">
        {children}
      </div>
    </div>
  );
}
