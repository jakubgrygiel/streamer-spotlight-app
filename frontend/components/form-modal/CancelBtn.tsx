import Button from "@/components/ui/Button";
import { FormEvent } from "react";

export default function CancelBtn() {
  function handleClick() {}
  return <Button text="Cancel" isMain={false} clickFn={handleClick} />;
}
