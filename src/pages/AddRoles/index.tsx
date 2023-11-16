import React from "react";
import styles from "./index.module.scss";
import Container from "src/components/Container";
import Button from "src/components/Button";

const AddRole = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <p className={styles.title}>Добавить Роль</p>
        <Button className={styles.button__prev} text={"Назад"} />
      </div>
      <Container className={styles.container}>
        <div className=""></div>
      </Container>
    </div>
  );
};

export default AddRole;
