import useInput from "@/hooks/useInput";
import TextInput from "../ui/TextInput";
import TextareaInput from "../ui/TextareaInput";
import CancelBtn from "./CancelBtn";
import CreateProfileBtn from "./CreateProfileBtn";
import DropdownAvatar from "./DropdownAvatar";
import DropdownBg from "./DropdownBg";
import DropdownPlatform from "./DropdownPlatform";
import useDropdownInput from "@/hooks/useDropdownInput";
import Image from "next/image";
import ModalWrapper from "../layout/modals/ModalWrapper";

export default function AddNewProfileModal() {
  const {
    value: nameValue,
    hasError: nameHasError,
    handleChange: handleChangeName,
    handleBlur: handleBlurName,
  } = useInput();
  const {
    value: descriptionValue,
    hasError: descriptionHasError,
    handleChange: handleChangeDescription,
    handleBlur: handleBlurDescription,
  } = useInput();
  const {
    value: avatarValue,
    hasError: avatarHasError,
    handleChange: handleChangeAvatar,
    handleBlur: handleBlurAvatar,
  } = useDropdownInput();
  const {
    value: imageValue,
    hasError: imageHasError,
    handleChange: handleChangeImage,
    handleBlur: handleBlurImage,
  } = useDropdownInput();
  const {
    value: platformValue,
    hasError: platformHasError,
    handleChange: handleChangePlatform,
    handleBlur: handleBlurPlatform,
  } = useDropdownInput();

  function submitForm() {
    handleBlurName();
    handleBlurDescription();
    handleBlurAvatar();
    handleBlurImage();
    handleBlurPlatform();
  }

  return (
    <ModalWrapper>
      <div className="w-[400px] bg-[var(--bg-secondary)] rounded-xl">
        <div className="relative flex justify-between items-center h-[100px] w-full p-6 bg-[var(--bg-light2)] rounded-t-xl">
          {imageValue && (
            <>
              <Image
                src={`/assets/images/${imageValue}.webp`}
                alt="background image"
                fill
                className=" rounded-t-xl"
              />
              <div className="absolute inset-0 bg-[var(--bg-image-backdrop)]"></div>
            </>
          )}
          <h2 className="relative font-semibold text-xl text-white">
            Add New Profile
          </h2>
          <div className="relative h-[52px] w-[100px]">
            <img
              src={`assets/images/${
                avatarValue === "" ? "user-loading" : avatarValue
              }.webp`}
              alt=""
              className="absolute h-[100px] w-[100px] rounded-full"
            />
          </div>
        </div>
        <form className="flex flex-col gap-4 w-full p-6">
          <TextInput
            id="name"
            label="Name"
            value={nameValue}
            placeholder="e.g. streamer1234"
            hasError={nameHasError}
            handleChange={handleChangeName}
            handleBlur={handleBlurName}
          />
          <div className="z-20 flex justify-between items-center gap-3 w-full">
            <DropdownAvatar
              value={avatarValue}
              hasError={avatarHasError}
              handleChange={handleChangeAvatar}
            />
            <DropdownBg
              value={imageValue}
              hasError={imageHasError}
              handleChange={handleChangeImage}
            />
          </div>
          <TextareaInput
            id="description"
            label="Description"
            value={descriptionValue}
            placeholder="e.g. I'm a crazy streamer who interacts with fans with great enthusiasm..."
            hasError={descriptionHasError}
            handleChange={handleChangeDescription}
            handleBlur={handleBlurDescription}
          />
          <DropdownPlatform
            value={platformValue}
            hasError={platformHasError}
            handleChange={handleChangePlatform}
          />
          <div className="flex justify-between gap-3 mt-2">
            <CreateProfileBtn clickFn={submitForm} />
            <CancelBtn />
          </div>
        </form>
      </div>
    </ModalWrapper>
  );
}
