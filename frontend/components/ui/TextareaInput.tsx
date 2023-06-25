interface ITextareaInputProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  hasError: boolean;
  handleChange: (value: string) => void;
  handleBlur: () => void;
}

export default function TextareaInput({
  id,
  label,
  placeholder,
  value,
  hasError,
  handleChange,
  handleBlur,
}: ITextareaInputProps) {
  return (
    <div className="flex flex-col gap-2 w-full ">
      <label htmlFor={id} className="w-full font-semibold text-sm">
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          handleChange(e.target.value)
        }
        onBlur={handleBlur}
        className={` h-32 w-full px-3 py-2 font-medium text-[var(--text-main)] bg-[var(--bg-secondary)] border border-[var(--bg-very-light)] rounded-lg placeholder:text-[var(--text-dark)] resize-none ${
          hasError && "border-[var(--red)]"
        } transition-colors hover:border-[var(--text-secondary)]`}
      ></textarea>
    </div>
  );
}
