import { LabelHTMLAttributes } from "react";

interface RootProps {
  children: React.ReactNode;
}

export function Root(props: RootProps) {
  return (
    <div>
      {props.children}
    </div>
  );
}

interface LabelProp extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export function Label({ children, ...rest }: LabelProp) {
  return (
    <label {...rest}>
      {children}
    </label>
  );
}

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage(props: ErrorMessageProps) {
  return (
    <span>
      {props.message}
    </span>
  );
}


interface IconProps {
  children: React.ReactNode;
}

export function Icon(props: IconProps) {
  return (
    <div>
      {props.children}
    </div>
  );
}
