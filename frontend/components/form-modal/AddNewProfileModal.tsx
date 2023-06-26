import useInput from "@/hooks/useInput";
import TextInput from "../ui/TextInput";
import TextareaInput from "../ui/TextareaInput";
import CancelBtn from "./CancelBtn";
import CreateProfileBtn from "./CreateProfileBtn";
import DropdownAvatar from "./DropdownAvatar";
import DropdownBg from "./DropdownBg";
import DropdownPlatform from "./DropdownPlatform";
import useDropdownInput from "@/hooks/useDropdownInput";
import ModalWrapper from "../layout/modals/ModalWrapper";
import ModalTitleWrapper from "./ModalTitleWrapper";

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
      <div
        className="w-[400px] sm:w-full max-h-full bg-[var(--bg-secondary)]
       rounded-xl "
      >
        <ModalTitleWrapper avatar={avatarValue} background={imageValue} />
        <form
          className="flex h-scroll-full-desktop sm:h-scroll-full-mobile 
        w-full p-6 overflow-hidden"
        >
          <div className="flex flex-col justify-between gap-4 w-full overflow-hidden overflow-y-auto">
            <TextInput
              id="name"
              label="Name"
              value={nameValue}
              placeholder="e.g. streamer1234"
              hasError={nameHasError}
              handleChange={handleChangeName}
              handleBlur={handleBlurName}
            />
            <div
              className="z-20 flex justify-between items-center 
            gap-3 w-full"
            >
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
              placeholder="e.g. I'm a crazy streamer who interacts 
              with fans with great enthusiasm..."
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
          </div>
        </form>
      </div>
    </ModalWrapper>
  );
}
