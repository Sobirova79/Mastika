import React from "react";
import styles from "./index.module.scss";
import Container from "src/components/Container";
import Button from "src/components/Button";
import { useNavigate } from "react-router-dom";

const SubRole = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/roles");
  };
  return (
    <div>
      <div className={styles.navbar}>
        <p className={styles.title}>Admin</p>
        <Button
          onClick={handleNavigate}
          text="Назад"
          className={styles.button__back}
        />
      </div>
      <Container className={styles.container}>
        <div className="">
          <table className=" table-fixed  w100% ">
            <thead>
              <th className={styles.role}>Роли</th>
            </thead>

            <tbody className={styles.t__body}>
              <tr className={styles.t__r}>
                <td>Доступ = 1</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>

              <tr className={styles.t__r}>
                <td>Создание = 2</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>

              <tr className={styles.t__r}>
                <td>Изменение = 3</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            </tbody>

            <thead>
              <th className={styles.role}>Отзывы</th>
            </thead>
            <tbody className={styles.t__body}>
              <tr className={styles.t__r}>
                <td>Доступ = 4</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr className={styles.t__r}>
                <td>Добавить отзыв = 5</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            </tbody>

            <thead>
              <th className={styles.role}>Все заявки</th>
            </thead>
            <tbody className={styles.t__body}>
              <tr className={styles.t__r}>
                <td>Доступ = 6</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr className={styles.t__r}>
                <td>Создание = 7</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr className={styles.t__r}>
                <td>Изменение = 8</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            </tbody>

            <thead>
              <th className={styles.role}>Принятые заявки</th>
            </thead>
            <tbody className={styles.t__body}>
              <tr className={styles.t__r}>
                <td>Доступ = 9</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr className={styles.t__r}>
                <td>Создание = 10</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr className={styles.t__r}>
                <td>Изменение = 11</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default SubRole;
