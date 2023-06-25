import Portal from "../../portal/Portal";
import AddNewProfileModal from "../../form-modal/AddNewProfileModal";
import { UiCtx } from "@/context/ui-context";
import { useContext } from "react";

export default function ModalsWrapper() {
  const { addNewProfileModal } = useContext(UiCtx);

  return (
    <>
      {addNewProfileModal && (
        <Portal>
          <AddNewProfileModal />
        </Portal>
      )}
    </>
  );
}
