import useInput from "@/hooks/useInput";
import TextInput from "../ui/TextInput";
import TextareaInput from "../ui/TextareaInput";
import CancelBtn from "./CancelBtn";
import CreateProfileBtn from "./CreateProfileBtn";
import ModalWrapper from "./ModalWrapper";
import DropdownAvatar from "./DropdownAvatar";
import DropdownBg from "./DropdownBg";
import DropdownPlatform from "./DropdownPlatform";

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

  function submitForm() {
    handleBlurName();
    handleBlurDescription();
  }

  return (
    <ModalWrapper>
      <div className="w-full max-w-[400px] bg-[var(--bg-secondary)] rounded-xl">
        <div className="relative flex justify-between items-center h-[100px] w-full p-6 bg-[var(--bg-light2)] rounded-t-xl">
          <h2 className="font-semibold text-xl text-white">Add New Profile</h2>
          <div className="relative h-[52px] w-[100px]">
            <img
              src="assets/images/user-loading.webp"
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
          <div className="flex justify-between items-center gap-3 w-full">
            <DropdownAvatar />
            <DropdownBg />
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
          <DropdownPlatform />
          <div className="flex justify-between gap-3 mt-2">
            <CreateProfileBtn clickFn={submitForm} />
            <CancelBtn />
          </div>
        </form>
      </div>
    </ModalWrapper>
  );
}
