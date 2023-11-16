import React from "react";
import styles from "./index.module.scss";

import { useNavigate } from "react-router-dom";
import Button from "../Button";

const Filter = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/filter/ordercreator");
  };

  return (
    <div>
      <div className={styles.filter}>
        <div className={styles.input__group}>
          <input type="text" className={styles.input__link} />
          <select className={styles.input__group} name="" id="">
            <input type="text" className={styles.input__link} list="sphere" />
            <option value="Чизкей-торт">Чизкейк-торт</option>
            <option value="Кенди бар">Кенди бар</option>
            <option value="Ягодный">Ягодный</option>
            <option value="Меренговый">Меренговый</option>
            <option value="Мастичный">Мастичный</option>
            <option value="Крем">Крем</option>
            <option value="Бенто">Бенто</option>
          </select>
          <select className={styles.input__group} name="" id="">
            <input type="text" className={styles.input__link} list="time" />
            <option value="Сегодня">Сегодня</option>
            <option value="На завтра">На завтра</option>
          </select>
          <select className={styles.input__group} name="" id="">
            <input type="text" className={styles.input__link} list="type" />
            <option value="Самовывоз"> Тип: Самовывоз</option>
            <option value="Доставка">Тип: Доставка</option>
          </select>

          <input type="date" className={styles.input__link} />
          <select className={styles.input__group} name="" id="">
            <input type="text" className={styles.input__link} list="status" />
            <option value="Новые">Новые</option>
            <option value="Отказано">Отказано</option>
            <option value="Принято">Принято</option>
          </select>
          <Button
            className={styles.button__create}
            onClick={handleNavigate}
            text={"Создать"}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
