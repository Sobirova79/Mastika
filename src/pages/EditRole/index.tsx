import React, { useEffect } from "react";
import styles from "./index.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useRoles from "src/hooks/useRoles";
import categoryMutation from "src/hooks/mutation/role";
import Button from "src/components/Button";
import Container from "src/components/Container";

// export const roles = [
//   {
//     name: "Abdulaziz aka",
//     id: 77,
//   },
// ];
// console.log(roles);
const EditRole = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { refetch } = useRoles({ enabled: false });
  const {
    register,
    getValues,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data: roles } = useRoles({
    id: Number(id),
    enabled: !!id,
  });
  const { mutate } = categoryMutation();

  const onSubmit = () => {
    const { name } = getValues();
    mutate(
      {
        name,
        ...(!!id && { role_id: Number(id) }),
      },
      {
        onSuccess: () => {
          refetch();
          navigate("/roles?update=1");
        },
      }
    );
  };

  useEffect(() => {
    if (id && roles?.length) {
      reset({
        name: roles[0].name,
      });
    }
  }, [id, roles]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className={styles.create__category}>
          <p className={styles.title}>Изменение роли</p>
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
            <Button
              type="submit"
              className={styles.button__create}
              text={"Сохранить"}
            />
          </Container>
        </div>
      </div>
    </form>
  );
};

export default EditRole;
