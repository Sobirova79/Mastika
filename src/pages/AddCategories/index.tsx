import React, { useEffect } from "react";
import styles from "./index.module.scss";
import Container from "src/components/Container";
import Button from "src/components/Button";
import { useForm } from "react-hook-form";
import categoryMutation from "src/hooks/mutation/category";
import { useNavigate, useParams } from "react-router-dom";
import useCategories from "src/hooks/useCategories";

const AddCategories = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getValues, handleSubmit, register, reset } = useForm();
  const { mutate } = categoryMutation();
  const { data: categories } = useCategories({ id: Number(id), enabled: !!id });
  // console.log(categories);
  const onSubmit = () => {
    const { name, status } = getValues();

    mutate(
      {
        name: name,
        status: status,
        ...(!!id && { id: Number(id) }),
      },
      {
        onSuccess: () => {
          navigate("/categories?update=1");
        },
      }
    );
  };

  useEffect(() => {
    if (!!id && categories)
      reset({
        name: name,
        status: status,
      });
  }, [id, categories]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className={styles.create__category}>
          <p className={styles.title}>Создание категории</p>
          <Container className={styles.container}>
            <div className={styles.category__block}>
              <p>НАИМЕНОВАНИЕ</p>
              <div className={styles.input__block}>
                <input
                  type="text"
                  placeholder="Введите название"
                  {...register("name")}
                />
              </div>
            </div>
            <div className={styles.category__input}>
              <p>СТАТУС</p>
              <div className={styles.input__status}>
                <p>Активный</p>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  {...register("status" ? "Активный" : "Неактивный")}
                />
              </div>
              <Button
                type="submit"
                className={styles.button__create}
                text={"Добавить"}
              />
            </div>
          </Container>
        </div>
      </div>
    </form>
  );
};

export default AddCategories;
