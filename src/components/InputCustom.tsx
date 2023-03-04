import { InputHTMLAttributes, FC } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  placeholder?: string;
}

function InputCustom({ id, placeholder, ...props }: Props) {
  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="input-ghost input w-full max-w-full"
      {...props}
    />
  );
}

export default InputCustom;
