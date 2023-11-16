import styles from "./index.module.scss";
import Container from "src/components/Container";
import Button from "src/components/Button";
import { Link } from "react-router-dom";
import useDepartments from "src/hooks/useDepartments";
import Pagination from "src/components/Pagination";
import useQueryString from "src/hooks/useQueryString";
import Loading from "src/components/Loader";

const Filials = () => {
  const pages = Number(useQueryString("page")) || 1;
  const { data: filials, isLoading } = useDepartments({ page: pages });
  console.log(filials);

  return (
    <div>
      <div className={styles.navbar}>
        <p className={styles.title}>Филиалы</p>
        <Button className={styles.button__add} text="Добавить" />
      </div>
      <Container className={styles.container}>
        <div className="">
          {!!filials?.items.length && (
            <Pagination className="ml-16 mt-2 " totalPages={filials.pages} />
          )}
          {isLoading && <Loading />}
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">№</th>
                <th scope="col">Наименование</th>
                <th scope="col">Отдел</th>
                <th scope="col">Статус</th>
              </tr>
            </thead>
            {/* {!! filials?.length && ( */}
            <tbody>
              {filials?.items.map((filial, index) => {
                return (
                  <tr key={index}>
                    <td className={styles.category__link}>{index + 1}</td>
                    <td>{filial.name}</td>
                    <td> </td>
                    <td>{filial.status ? "Активный" : "Неактивный"}</td>
                    <td width={35} className="text-center cursor-pointer">
                      <Link to={`/categories/${filial}/show`}>
                        <img src="/assets/images/edit.svg" alt="edit" />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            {/*  )} */}
          </table>
        </div>
      </Container>
    </div>
  );
};

export default Filials;
