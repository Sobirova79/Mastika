import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Button from "src/components/Button";
import styles from "./index.module.scss";
import Container from "src/components/Container";
import useSubCategories from "src/hooks/useSubCategories";
import SubCategoryMutation from "src/hooks/mutation/subcategory";

const ShowSub = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    getValues,
  } = useForm();

  const { data: subcategories } = useSubCategories({
    id: Number(id),
    enabled: !!id,
  });

  const { mutate } = SubCategoryMutation();

  const onSubmit = () => {
    const { name, id } = getValues();
    mutate(
      {
        name,
        id,
        ...(!!id && { id: Number(id) }),
      },
      {
        onSuccess: () => {
          navigate("/subcategory?update=1");
        },
      }
    );
  };

  useEffect(() => {
    if (id && subcategories?.length) {
      reset({
        name: subcategories[0].name,
        id: !!subcategories[0].id,
      });
    }
  }, [id, subcategories]);
  console.log(subcategories, "categ");
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <div className={styles.create__category}>
            <p className={styles.title}>Изменение sub категории</p>
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
                {subcategories?.map((sub, idx) => (
                  <div className={styles.input__status}>
                    <input className={styles.checkbox} type="checkbox" />
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
    </div>
  );
};

export default ShowSub;
