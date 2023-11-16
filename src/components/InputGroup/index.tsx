import React from "react";
import styles from "./index.module.scss";

interface Props {
  type?: string;
  placeholder?: string;
  className?: string;
  autoComplete: string;
  register?: string;
}

const InputGroup: React.FC<Props> = ({
  type,
  placeholder,
  className,
  autoComplete,
  register,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      autoComplete={autoComplete}
    >
      {register}
    </input>
  );
};

export default InputGroup;
