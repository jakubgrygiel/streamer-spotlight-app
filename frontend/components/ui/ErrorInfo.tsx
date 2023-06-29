import GoBackLink from "../layout/header/GoBackLink";

export default function ErrorInfo() {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-6 pt-12">
      <img
        src="/assets/icons/icon-error.svg"
        alt="gaming icon"
        className="h-32 w-32"
      />
      <h1 className=" text-center font-semibold text-xl">Ooops!</h1>
      <p className=" max-w-md text-center text-[var(--text-secondary)]">
        Something went wrong. Refresh the page and make sure you have the
        correct address.
      </p>
      <p className=" max-w-md text-center text-[var(--text-secondary)]">
        If you're looking for a streamer's profile, it's possible that the
        profile doesn't exist. Go back to the main page and select the profile
        that interests you.
      </p>
      <div className="w-44">
        <GoBackLink />
      </div>
    </div>
  );
}
