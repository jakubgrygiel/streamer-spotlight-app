import Button from "@/components/ui/Button";

interface ICreateProfileBtnProps {
  clickFn: () => void;
}

export default function CreateProfileBtn({ clickFn }: ICreateProfileBtnProps) {
  return <Button text="Create Profile" isMain={true} clickFn={clickFn} />;
}
