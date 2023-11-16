import React from "react";
import styles from "./index.module.scss";
import Container from "src/components/Container";
import Button from "src/components/Button";
const Search = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <p className={styles.title}>Поиск</p>
        <Button text="search" className={styles.button__search} />
      </div>
      <Container>
        <div className="">Search</div>
      </Container>
    </div>
  );
};

export default Search;
