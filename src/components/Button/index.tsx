import React, { Children } from "react";
interface Props {
  onClick?: () => void;
  className?: string;
  text: string;
  type?: "submit" | "button";
}

const Button: React.FC<Props> = ({
  onClick,
  text,
  className,
  type = "button",
}) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
