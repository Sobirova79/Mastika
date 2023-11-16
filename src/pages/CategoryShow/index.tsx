import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Container from "src/components/Container";
import styles from "./index.module.scss";
import useCategories from "src/hooks/useCategories";
import { useForm } from "react-hook-form";
import categoryMutation from "src/hooks/mutation/category";

const Show = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    getValues,
  } = useForm();
  const { data: categories } = useCategories({
    id: Number(id),
    enabled: !!id,
  });
  const { mutate } = categoryMutation();

  const onSubmit = () => {
    const { name, status } = getValues();
    mutate(
      {
        name,
        status,
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
    if (id && categories?.length) {
      reset({
        name: categories[0].name,
        status: !!categories[0].status,
      });
    }
  }, [id, categories]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className={styles.create__category}>
          <p className={styles.title}>Изменение категории</p>
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
              {categories?.map((category, idx) => (
                <div className={styles.input__status}>
                  <p>{category.status ? "Активный" : "Неактивный"}</p>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    {...register("status")}
                  />
                </div>
              ))}
              <Button
                type="submit"
                className={styles.button__create}
                text={"Сохранить"}
              />
            </div>
          </Container>
        </div>
      </div>
    </form>
  );
};

export default Show;
