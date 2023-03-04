import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  label?: string;
  icon?: JSX.Element;
  loading?: boolean;
  onClick?: any;
}
const CustomButton: FC<ButtonProps> = ({
  id,
  label,
  icon,
  loading,
  onClick,
  ...props
}) => {
  return (
    <button
      id={id}
      className={`${loading && "cursor-not-allowed bg-gray-300"}`}
      disabled={loading}
      onClick={onClick}
      {...props}
    >
      {icon} {label}
    </button>
  );
};

export default CustomButton;
