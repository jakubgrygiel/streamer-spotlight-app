interface ITextInputProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  hasError: boolean;
  handleChange: (value: string) => void;
  handleBlur: () => void;
}

export default function TextInput({
  id,
  label,
  placeholder,
  value,
  hasError,
  handleChange,
  handleBlur,
}: ITextInputProps) {
  return (
    <div className="flex flex-col gap-2 w-full ">
      <label htmlFor={id} className="w-full font-semibold text-sm">
        {label}
      </label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(e.target.value)
        }
        onBlur={handleBlur}
        className={` h-10 w-full p-3 font-medium text-[var(--text-main)] bg-[var(--bg-secondary)] border border-[var(--bg-very-light)] rounded-lg placeholder:text-[var(--text-dark)] ${
          hasError && "border-[var(--red)]"
        } transition-colors hover:border-[var(--text-secondary)]`}
      />
    </div>
  );
}
