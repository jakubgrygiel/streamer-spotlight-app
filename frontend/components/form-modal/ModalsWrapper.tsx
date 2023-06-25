import Portal from "../portal/Portal";
import AddNewProfileModal from "./AddNewProfileModal";

export default function ModalsWrapper() {
  return (
    <>
      <Portal>
        <AddNewProfileModal />
      </Portal>
    </>
  );
}
