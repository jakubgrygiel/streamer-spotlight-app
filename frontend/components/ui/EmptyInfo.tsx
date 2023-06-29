import AddNewProfileBtn from "../layout/header/AddNewProfileBtn";

export default function EmptyInfo() {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-6 pt-12">
      <img
        src="/assets/icons/icon-gaming.svg"
        alt="gaming icon"
        className="h-32 w-32 animate-wiggle animate-twice"
      />
      <h1 className=" text-center font-semibold text-xl">
        No streamers added yet
      </h1>
      <p className=" max-w-md text-center text-[var(--text-secondary)]">
        Be the first and create your profile to gain fans around the world and
        create the best community among content creators
      </p>
      <div className="w-44">
        <AddNewProfileBtn />
      </div>
    </div>
  );
}
