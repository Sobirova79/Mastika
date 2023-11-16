import React from "react";
import styles from "./index.module.scss";
import Container from "src/components/Container";
import Button from "src/components/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import useSubCategories from "src/hooks/useSubCategories";
import useCategories from "src/hooks/useCategories";

const SubCategory = () => {
  const { id } = useParams();
  const { data: categories } = useCategories({ id: Number(id) });
  const { data: subcategories } = useSubCategories({ category_id: id });
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/categories/subcategory");
  };
  console.log(subcategories, "categ");
  return (
    <div>
      <div className={styles.create__category}>
        <div className={styles.navbar}>
          {categories?.map((category, idx) => {
            return <p className={styles.title}>{category.name}</p>;
          })}
          <Button
            type="submit"
            className={styles.button__add}
            text={"Создать"}
          />
        </div>

        <Container className={styles.container}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">№</th>
                <th scope="col">Категория</th>
                <th scope="col">Статус</th>
              </tr>
            </thead>
            {!!subcategories?.length && (
              <tbody>
                {subcategories?.map((sub, idx) => (
                  <tr key={idx}>
                    <td scope="col">{idx + 1}</td>
                    <td className={styles.category__link}>{sub?.name}</td>
                    <td onClick={handleNavigate}>
                      {sub?.subcategory_vs_category.id
                        ? "Активный"
                        : "Неактивный"}
                    </td>
                    <td width={35} className="text-center cursor-pointer">
                      <Link to={`/subcategory/${sub.id}/showsub`}>
                        <img src="/assets/images/edit.svg" alt="edit" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </Container>
      </div>
    </div>
  );
};

export default SubCategory;
