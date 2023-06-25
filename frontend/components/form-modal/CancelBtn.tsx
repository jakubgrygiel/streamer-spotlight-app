import Button from "@/components/ui/Button";
import { UiCtx } from "@/context/ui-context";
import { FormEvent, useContext } from "react";

export default function CancelBtn() {
  const { closeModal } = useContext(UiCtx);

  return <Button text="Cancel" isMain={false} clickFn={closeModal} />;
}
