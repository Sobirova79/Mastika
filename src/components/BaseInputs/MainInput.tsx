import { ChangeEvent, FC, HTMLInputTypeAttribute, useRef } from "react";
import cl from "classnames";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./index.module.scss";

export enum InputStyle {
  primary = "primary",
  white = "white",
}

interface Props {
  // onChange?: (val: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string | null;
  autoFocus?: boolean;
  disabled?: boolean;
  register?: UseFormRegisterReturn;
  onFocus?: () => void;
  ref?: any;
  inputStyle?: InputStyle;
  autoComplete?: boolean;
  selected?: Date | null | undefined;
  onChange?: any;
}

const MainInput: FC<Props> = ({
  className,
  placeholder = "",
  register,
  ref,
  inputStyle = InputStyle.primary,
  autoComplete,
  selected,
  onChange,
  ...others
}) => {
  return (
    <input
      className={cl(
        "mb-2 w-full rounded-lg",
        styles.inputBox,
        styles[inputStyle],
        className
      )}
      placeholder={placeholder || ""}
      ref={ref}
      {...register}
      {...others}
    />
  );
};

export default MainInput;
