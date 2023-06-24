import Button from "@/components/ui/Button";

export default function AddNewProfileBtn() {
  function openModal() {}
  return <Button text="+Add New Profile" isMain={true} clickFn={openModal} />;
}
