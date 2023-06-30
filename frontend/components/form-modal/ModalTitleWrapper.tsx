import Image from "next/image";

interface IModalTitleWrapperProps {
  avatar: string;
  background: string;
}

export default function ModalTitleWrapper({
  avatar,
  background,
}: IModalTitleWrapperProps) {
  return (
    <div className="z-40 relative flex justify-between items-center h-[100px] w-full p-6 bg-[var(--bg-light2)] rounded-t-xl sm:h-16">
      {background && (
        <>
          <Image
            src={`/assets/images/${background}.webp`}
            alt="background image"
            fill
            className=" rounded-t-xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-[var(--bg-image-backdrop)]"></div>
        </>
      )}
      <h2 className="relative font-semibold text-xl text-white">
        Add New Profile
      </h2>
      <div className="relative h-[52px] w-[100px] sm:h-6 sm:w-16">
        <img
          src={`assets/images/${avatar === "" ? "user-loading" : avatar}.webp`}
          alt="avatar image"
          className="absolute h-[100px] w-[100px] rounded-full sm:h-16 sm:w-16"
        />
      </div>
    </div>
  );
}
