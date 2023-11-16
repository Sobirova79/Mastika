import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Container from "src/components/Container";
import MapScreen from "src/components/Map";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/utils/types";
import {
  addHandler,
  orderSelector,
  updateHandler,
} from "../../redux/reducers/AddOrder";
import { useForm } from "react-hook-form";
import Button from "src/components/Button";
// import PhoneInput from "react-phone-input-2";
import useQueryString from "src/hooks/useQueryString";
import queryString from "query-string";
import useOrder from "src/hooks/useOrder";
import ordersMutation from "src/hooks/mutation/orders";
import PhoneInput from "src/components/BaseInputs/PhoneInput";

enum OrderType {
  delivery = 2,
  takeaway = 1,
}
const OrderDetails = () => {
  const phoneStr = useQueryString("phone");

  const { id } = useParams();
  const [active, $active] = useState<OrderType>();

  const navigate = useNavigate();
  // const { data: order } = useOrders({ id: Number(id), enabled: !!id });
  const { data: order } = useOrder({ id: Number(id), enabled: !!id });

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useAppDispatch();

  const { mutate } = ordersMutation();

  const onSubmit = () => {
    const { name, deliver_date, typeorder, apartment } = getValues();
    mutate(
      {
        order_user: name,
        phone_number: phone,
        extra_number: extraphone,
        deliver_date: deliver_date,
        is_delivery: typeorder,
        apartment: apartment,
        ...(!!id && { id: Number(id) }),
      },
      {
        onSuccess: () => {
          navigate("/applications");
        },
      }
    );
  };

  useEffect(() => {
    if (!!id && order)
      reset({
        name: order.order[0].order_user,
        number: order.order[0].phone_number,
        extranumber: order.order[0].extra_number,
        deliver_date: order.order[0].created_at,
        status: order.order[0].status,
        typeorder: order.order[0].is_delivery,
        apartment: order.order[0].apartment,
      });
  }, [id, order]);

  // const AddItems = useAppSelector(orderSelector);

  const [phone, $phone] = useState(phoneStr || "");
  const [extraphone, $extraphone] = useState("");

  const handlePhone = (val: string) => $phone(val);
  const handleExtraPhone = (val: string) => $extraphone(val);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.title}>Детали заказа</div>
        <Container className={styles.container}>
          <div className="flex">
            <div className={styles.details__block}>
              <p className={styles.details__title}>Новый заказ</p>

              <div className={styles.details__inform}>
                <p className={styles.client__name}>Имя</p>
                <input
                  type="text"
                  placeholder="Введите имя"
                  className={styles.input}
                  // autoComplete="off"
                  {...register("name")}
                />
              </div>

              <div className={styles.details__inform}>
                <p className={styles.client__name}>Номер телефона</p>

                <PhoneInput
                  className={styles.selector}
                  autoFocus
                  placeholder="Введите номер"
                  onChange={handlePhone}
                  value={phone}
                />
              </div>

              <div className={styles.details__inform}>
                <p className={styles.client__name}>Доп. номер</p>
                <PhoneInput
                  className={styles.selector}
                  placeholder="+998 97 123 77 64"
                  onChange={handleExtraPhone}
                  value={extraphone}
                />
              </div>
              {errors?.name && <span>{errors.name?.message?.toString()}</span>}

              <div className={styles.details__inform}>
                <p className={styles.client__name}>Тип заказа</p>
                <div className={styles.buttons}>
                  <p>Доставка?</p>
                  <input type="checkbox" {...register("typeorder")} />
                </div>
              </div>
              <div className={styles.details__inform}>
                <p className={styles.client__name}>Выберите филиал</p>
                <input
                  type="text"
                  placeholder="Введите имя"
                  className={styles.input}
                />
              </div>
            </div>
            <div className={styles.map}>
              {active === OrderType.delivery && <MapScreen />}
            </div>
          </div>

          <div className={styles.button__next}>
            <Button type={"submit"} text={"Создать заказ"} />
          </div>
        </Container>
      </form>
    </div>
  );
};

export default OrderDetails;
