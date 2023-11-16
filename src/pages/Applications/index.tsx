import Container from "src/components/Container";
import styles from "./index.module.scss";
import Filter from "src/components/Filter";
import { useAppDispatch, useAppSelector } from "../../redux/utils/types";
import { useNavigate, useParams } from "react-router-dom";
import { tokenSelector } from "src/redux/reducers/auth";
import useOrders from "src/hooks/useOrders";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "src/components/Pagination";
import useQueryString from "src/hooks/useQueryString";
import Loading from "src/components/Loader";
import dayjs from "dayjs";
import { orderStatus } from "src/utils/helpers";
import cl from "classnames";

const Applications = () => {
  const { id } = useParams();
  // const items = useAppSelector(orderSelector);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const page = Number(useQueryString("page")) || 1;
  const { data: orders, isLoading } = useOrders({ page: page });
  console.log(orders);
  // const handleNavigate = () => {
  //   navigate("ordersettings");
  // };
  // const token = useAppSelector(tokenSelector);
  // console.log(token);
  // const { data: order } = useOrder({ id: Number(id), enabled: !!id });
  // console.log(id);
  return (
    <div>
      <Filter />
      <Container className={styles.container}>
        <div className="">
          {!!orders?.items.length && (
            <Pagination className="mt-2 ml-16" totalPages={orders.pages} />
          )}
          <table className={styles.table}>
            <thead>
              <tr className={styles.spisok}>
                <th className={styles.spisok__list}>Все заявки</th>
                <th className={styles.spisok__list}>Сфера</th>
                <th className={styles.spisok__list}>Дата поступления</th>
                <th className={styles.spisok__list}>Тип</th>
                <th className={styles.spisok__list}>Филиал</th>
                <th className={styles.spisok__list}>Статус</th>
              </tr>
            </thead>
            {orders?.items.map((app, index) => {
              return (
                <tbody>
                  <tr
                    key={index}
                    className={cl(orderStatus(app.status)?.color)}
                  >
                    <th className={styles.down__list}>
                      <span
                        className={styles.person__id}
                        onClick={() =>
                          navigate(`/applications/${app.id}/ordersettings`)
                        }
                      >
                        № {app.id}
                      </span>
                      <div className={styles.person__info}>
                        <div className={styles.person__network}>
                          {app.is_bot ? (
                            <div className="flex gap-1">
                              <img
                                src="/assets/images/telegram.svg"
                                alt="telegram"
                              />
                              <p> Телеграм бот </p>
                            </div>
                          ) : (
                            <div className="flex gap-1">
                              <img src="/assets/images/web.svg" alt="web" />
                              <p> Веб-сайт </p>
                            </div>
                          )}
                        </div>
                        <div className={styles.person__name}>
                          <img src="/assets/images/person.svg" alt="" />
                          <p>{app.order_user}</p>
                        </div>
                      </div>
                    </th>
                    <th className={styles.down__list}>{app.apartment}</th>
                    <th className={styles.down__list}>
                      {dayjs(app.created_at).format("DD/MM/YYYY, HH:mm ")}
                    </th>
                    <th className={styles.down__list}>
                      {app.is_delivery ? (
                        <img src="/assets/images/yandex.svg" alt="" />
                      ) : (
                        <img src="/assets/images/car.svg" alt="" />
                      )}
                    </th>
                    <th className={styles.down__list}>{app.apartment}</th>

                    <th className={styles.down__list}>
                      {orderStatus(app.status).text}
                    </th>
                  </tr>
                </tbody>
              );
            })}
          </table>

          {isLoading && <Loading className="py-4" />}
        </div>
      </Container>
    </div>
  );
};

export default Applications;
