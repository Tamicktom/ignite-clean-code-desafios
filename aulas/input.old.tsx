import { ReactNode } from "react";

interface Props {
  label?: string;
  leftIcon?: ReactNode;
  icon?: ReactNode;
  errorMessage?: string;
}

export const Input = ({ label, leftIcon = null, icon = null, errorMessage }: Props) => {
  return (
    <div>
      {label && <label>{label}</label>}
      {leftIcon}
      <input type="text" />
      {icon}
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  );
};
