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
import axios from "axios";
import { TPlatform } from "@/models/Streamer";
import { useContext } from "react";
import { DataCtx } from "@/context/data-context";
import { UiCtx } from "@/context/ui-context";
import API_URL from "@/services/API";
import useSendData from "@/hooks/useSendData";

interface IFormData {
  name: string;
  description: string;
  avatar: string;
  background: string;
  platform: TPlatform;
  votes: number;
}

export default function AddNewProfileModal() {
  const { getData } = useContext(DataCtx);
  const { closeModal } = useContext(UiCtx);
  const { sendData } = useSendData();
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

  async function submitForm() {
    touchEveryInput();
    const formIsValid =
      !nameHasError &&
      !descriptionHasError &&
      !avatarHasError &&
      !imageHasError &&
      !platformHasError;
    if (formIsValid) {
      const data = prepareData();
      await sendData(data);
      getData(); // update data on the home page after submitting form
      closeModal();
    }
  }

  function prepareData() {
    const formData: IFormData = {
      name: nameValue,
      description: descriptionValue,
      avatar: avatarValue,
      background: imageValue,
      platform: platformValue as TPlatform,
      votes: 0,
    };
    return formData;
  }

  function touchEveryInput() {
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
       rounded-xl border border-[var(--bg-light)]"
      >
        <ModalTitleWrapper avatar={avatarValue} background={imageValue} />
        <form
          className="relative flex h-scroll-full-desktop sm:h-scroll-full-mobile 
        w-full p-6 py-2 overflow-hidden"
        >
          <div className="flex flex-col justify-between gap-4 w-full py-4 overflow-hidden overflow-y-auto">
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
          <div className="z-20 absolute top-2 w-full gradient-100-0 h-4 pointer-events-none"></div>
          <div className="z-20 absolute bottom-2 w-full gradient-0-100 h-4 pointer-events-none"></div>
        </form>
      </div>
    </ModalWrapper>
  );
}
