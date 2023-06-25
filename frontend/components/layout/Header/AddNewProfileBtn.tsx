import Button from "@/components/ui/Button";
import { UiCtx } from "@/context/ui-context";
import { useContext } from "react";

export default function AddNewProfileBtn() {
  const { openModal } = useContext(UiCtx);

  return <Button text="+Add New Profile" isMain={true} clickFn={openModal} />;
}
