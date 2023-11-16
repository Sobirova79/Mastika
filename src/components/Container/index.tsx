import React, { FC, ReactNode } from "react";
import styles from "./index.module.scss";
import cl from "classnames";

interface Props {
  className?: string;
  children: ReactNode;
}

const Container: FC<Props> = ({ children, className }) => {
  return (
    <div className={cl(className, styles.container)}>
      <div className={styles.child}>{children}</div>
    </div>
  );
};

export default Container;
