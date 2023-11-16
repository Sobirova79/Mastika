import React from "react";
import Container from "src/components/Container";
import styles from "./index.module.scss";
import Button from "src/components/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Loading from "src/components/Loader";
import useProducts from "src/hooks/useProducts";
import Pagination from "src/components/Pagination";

const Products = () => {
  const { data: products, isLoading } = useProducts({});
  console.log(products, "products");
  const navigate = useNavigate();
  // const handleNavigate = () => {
  //   navigate("/categories/addcategories");
  // };
  const { register } = useForm();
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.title}>Категории</div>
        <Button
          type="submit"
          className={styles.button__add}
          text={"Создать категорию"}
          // onClick={handleNavigate}
        />
      </div>
      <Container className={styles.container}>
        <div className="">
          {isLoading && <Loading />}
          <table className="table table-hover">
            {/* {!!products?.length && (
              <Pagination className="mt-2 ml-16" totalPages={products.pages} />
            )} */}
            <thead>
              <tr>
                <th scope="col">№</th>
                <th scope="col">Наименование</th>
                <th scope="col">Цена</th>
                <th scope="col">Статус</th>
              </tr>
            </thead>
            {!!products?.length && (
              <tbody>
                {products?.map((product, idx) => (
                  <tr key={idx}>
                    <td scope="col">{idx + 1}</td>
                    <td className={styles.category__link}>
                      <Link to={`${product.id}/`}>{product?.name}</Link>
                    </td>
                    <td>{product?.price}</td>
                    <td>{product?.status ? "Активный" : "Неактивный"}</td>
                    <td width={35} className="text-center cursor-pointer">
                      <Link to={`/categories/${product.id}/show`}>
                        <img src="/assets/images/edit.svg" alt="edit" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
          {!products?.length}
        </div>
      </Container>
    </div>
  );
};

export default Products;
