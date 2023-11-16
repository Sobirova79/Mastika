import React from "react";
import styles from "./index.module.scss";
import Container from "src/components/Container";
import Button from "src/components/Button";
const Settings = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <p className={styles.title}>Настройки</p>
        <Button text={"Назад"} className={styles.button__prev} />
      </div>
      <Container>
        <div className={styles.container}></div>
      </Container>
    </div>
  );
};

export default Settings;
