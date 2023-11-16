import React, { useEffect } from "react";
import styles from "./index.module.scss";
import Container from "src/components/Container";
import Button from "src/components/Button";
import PhoneInput from "react-phone-input-2";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import userMutation from "src/hooks/mutation/user";
import useUser from "src/hooks/useUser";
import MainInput from "src/components/InputStyle";
import useUsers from "src/hooks/useUsers";

const AddUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getValues, register, reset, handleSubmit } = useForm();
  const { mutate } = userMutation();
  const { data: user } = useUser({ id: Number(id), enabled: !!id });

  const onSubmit = () => {
    const { name, login, role, phone, status, password } = getValues();

    mutate(
      {
        username: name,
        password: password,
        phone_number: phone,
        role_id: role,
        full_name: login,
        status: status,
        ...(!!id && { id: Number(id) }),
      },
      {
        onSuccess: () => {
          navigate("/users?update=1");
        },
      }
    );
  };

  useEffect(() => {
    if (!!id && user)
      reset({
        name: user.username,
        password: user.password,
        phone: user.phone_number,
        role: user.role_id,
        login: user.full_name,
        status: user.status,
      });
  }, [id, user]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className={styles.navbar}>
          <p className={styles.title}>Добавить пользователь</p>
          <Button
            className={styles.button__prev}
            onClick={() => navigate("/users")}
            text={"Назад"}
          />
        </div>
        <Container className="">
          <div className="flex p-10 gap-5">
            <div className="">
              <div className="">
                <p>ФИО</p>
                <MainInput {...register("name")} />
              </div>

              <div className="">
                <p>Логин</p>
                <MainInput {...register("login")} />
              </div>

              <div className="">
                <p>Телефон</p>
                <PhoneInput
                  inputProps={{
                    className: styles.phone__input,
                  }}
                  country={"uz"}
                  onlyCountries={["uz", "kz", "ru"]}
                  placeholder="+998 97 123 45 67"
                />
              </div>
            </div>
            <div className="">
              <div className="">
                <p>Роль</p>
                <MainInput {...register("role")} />
              </div>

              <div className="">
                <p>Пароль</p>
                <MainInput
                  autoComplete
                  type="password"
                  {...register("password")}
                />
              </div>

              <div className="">
                <p>Статус</p>
                <div className={styles.active__class}>
                  <p>Активный</p>
                  <MainInput {...register("status")} type="checkbox" />
                </div>
              </div>

              <Button
                className={styles.button__add}
                type={"submit"}
                text={"Добавить"}
              />
            </div>
          </div>
        </Container>
      </div>
    </form>
  );
};

export default AddUser;
