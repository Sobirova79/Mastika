import React from "react";
import styles from "./index.module.scss";
import Container from "src/components/Container";
import Button from "src/components/Button";
import { Link, useNavigate } from "react-router-dom";
import useUsers from "src/hooks/useUsers";
import Loading from "src/components/Loader";

const Clients = () => {
  const navigate = useNavigate();
  const { data: users, isLoading } = useUsers({});
  console.log(users);

  return (
    <div>
      <div className={styles.navbar}>
        <p className={styles.title}>Пользователи</p>
        <Button
          className={styles.button__add}
          text={"Добавить"}
          onClick={() => navigate("/users/adduser")}
        />
      </div>
      {isLoading && <Loading />}
      <Container className="h-full">
        <div className="">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">№</th>
                <th scope="col">ФИО</th>
                <th scope="col">Логин</th>
                <th scope="col">Роль</th>
                <th scope="col">Телефон</th>
                <th scope="col">Статус</th>
              </tr>
            </thead>
            {!!users?.items.length && (
              <tbody>
                {users?.items.map((user, idx) => (
                  <tr key={idx}>
                    <td scope="col">{idx + 1}</td>
                    <td className={styles.category__link}>
                      <Link to={`${""}/subcategory`}>{user.full_name}</Link>
                    </td>
                    <td>{user.username}</td>
                    <td>{user.role_id}</td>
                    <td>{user.phone_number}</td>
                    <td>{user.status ? "Активный" : "Неактивный"}</td>
                    <td width={35} className="text-center cursor-pointer">
                      <Link to={`/categories/${""}/show`}>
                        <img src="/assets/images/edit.svg" alt="edit" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
          {/* {!categories?.length} */}
        </div>
      </Container>
    </div>
  );
};

export default Clients;
