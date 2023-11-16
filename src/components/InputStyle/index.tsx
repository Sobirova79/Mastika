import React, { HTMLInputTypeAttribute } from "react";
import styles from "./index.module.scss";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  className?: string;
  register?: UseFormRegisterReturn;
  type?: HTMLInputTypeAttribute;
  placeholder?: string | null;
  autoFocus?: boolean;
  disabled?: boolean;
  autoComplete?: boolean;
  selected?: Date | null | undefined;
  onChange?: any;
}
const MainInput: React.FC<Props> = ({
  className,
  placeholder = "",
  register,
  autoComplete,
  selected,
  onChange,
  ...others
}) => {
  return (
    <div>
      <input
        className={styles.input}
        autoComplete={""}
        {...register}
        {...others}
      />
    </div>
  );
};

export default MainInput;
