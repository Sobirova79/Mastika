import styles from "./index.module.scss";
import Container from "src/components/Container";
import Button from "src/components/Button";
import { Link } from "react-router-dom";
import useQueryString from "src/hooks/useQueryString";
import useFillings from "src/hooks/useFillings";
import { getFillingType } from "src/utils/helpers";
import Loading from "src/components/Loader";

const Fillings = () => {
  const { data: fillings, isLoading } = useFillings({});
  console.log(fillings);

  return (
    <div>
      <div className={styles.navbar}>
        <p className={styles.title}>Начинки</p>
        <Button className={styles.button__add} text="Добавить" />
      </div>
      <Container className={styles.container}>
        <div className="">
          {isLoading && <Loading />}
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">№</th>
                <th scope="col">Категория</th>
                <th scope="col">Тип</th>
              </tr>
            </thead>
            {/* {!! filials?.length && ( */}
            <tbody>
              {fillings?.map((filling, index) => {
                return (
                  <tr key={index}>
                    <td className={styles.category__link}>{index + 1}</td>
                    <td>{filling.name}</td>
                    <td>{getFillingType(filling.ptype)}</td>
                    <td width={35} className="text-center cursor-pointer">
                      <Link to={`/categories/${filling}/show`}>
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

export default Fillings;
