import React from "react";
import Container from "src/components/Container";
import styles from "./index.module.scss";
import Button from "src/components/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import useCategories from "src/hooks/useCategories";
import { useForm } from "react-hook-form";
import Loading from "src/components/Loader";
// const categories = [
//   {
//     name: "Abdulaziz aka",
//     id: 77,
//     status: 1,
//   },
// ];
const Categories = () => {
  const { data: categories, isLoading } = useCategories({});
  console.log(categories);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/categories/addcategories");
  };
  const { register } = useForm();
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.title}>Категории</div>
        <Button
          type="submit"
          className={styles.button__add}
          text={"Создать категорию"}
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
                <th scope="col">Категория</th>
                <th scope="col">Статус</th>
              </tr>
            </thead>
            {!!categories?.length && (
              <tbody>
                {categories?.map((category, idx) => (
                  <tr key={idx}>
                    <td scope="col">{idx + 1}</td>
                    <td className={styles.category__link}>
                      <Link to={`${category.id}/subcategory`}>
                        {category?.name}
                      </Link>
                    </td>
                    <td>{category?.status ? "Активный" : "Неактивный"}</td>
                    <td width={35} className="text-center cursor-pointer">
                      <Link to={`/categories/${category.id}/show`}>
                        <img src="/assets/images/edit.svg" alt="edit" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
          {!categories?.length}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
