import React from "react";
import styles from "./index.module.scss";
import Button from "src/components/Button";
import Container from "src/components/Container";
import { Link, useNavigate } from "react-router-dom";
import useRoles from "src/hooks/useRoles";
import Loading from "src/components/Loader";
// const roles = [
//   {
//     name: "Abdulaziz aka",
//     id: 77,
//   },
// ];
// console.log(roles);

const orderLoading = false;

const Roles = () => {
  const { data: roles, isLoading } = useRoles({});
  console.log(roles);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/roles/addrole");
  };
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.title}>Роли</div>
        <Button
          type="submit"
          className={styles.button__add}
          text={"Добавить роль"}
          onClick={handleNavigate}
        />
      </div>
      <Container className={styles.container}>
        <div className="">
          {isLoading && <Loading />}
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">№</th>
                <th scope="col">Название</th>
              </tr>
            </thead>
            {!!roles?.length && (
              <tbody>
                {roles?.map((role, idx) => (
                  <tr key={idx}>
                    <td scope="col">{idx + 1}</td>
                    <td className={styles.category__link}>
                      <Link to={`/roles/${role.id}/subrole`}>{role?.name}</Link>
                    </td>
                    <td width={40} className="text-center cursor-pointer">
                      <Link to={`/roles/${role.id}/editrole`}>
                        <img src="/assets/images/edit.svg" alt="edit" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </Container>
    </div>
  );
};

export default Roles;
