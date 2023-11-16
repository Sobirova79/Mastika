import React from "react";
import Container from "src/components/Container";
import styles from "./index.module.scss";
import { useAppSelector } from "src/redux/utils/types";
import { tokenSelector } from "src/redux/reducers/auth";

const Main = () => {
  const token = useAppSelector(tokenSelector);
  console.log(token, "token");
  return (
    <div className="">
      <Container className={styles.container}>
        <div className={styles.main__block}>
          <div className={styles.main__box}>
            <div className={styles.meeting}>
              <div className={styles.main__title}>
                Добро пожаловать, пользователь!
              </div>
              <div className={styles.meeting__images}>
                <img src="/assets/images/red_prize.svg " alt="personal" />
                <img src="/assets/images/black_prize.svg " alt="personal" />
              </div>
            </div>
          </div>
          <div className={styles.main__box}>
            <div className={styles.flex}>
              <div className={styles.dashbord}>
                <div className={styles.main__title}>Дашборд</div>
                <img src="/assets/images/dashbord.svg" alt="personal" />
              </div>

              <div className={styles.main__box}>
                <div className={styles.inform}>
                  <div className={styles.main__title}>Персональные данные</div>
                  <img src="/assets/images/wallet.svg" alt="personal" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.main__box}>
            <div className={styles.settings}>
              <div className={styles.main__title}>Настройки</div>
              <img src="/assets/images/settings.svg" alt="personal" />
            </div>
          </div>

          <div className={styles.main__box}>
            <div className={styles.comments}>
              <div className={styles.main__title}>Отзывы</div>
              <img src="/assets/images/kubok.svg" alt="personal" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Main;
