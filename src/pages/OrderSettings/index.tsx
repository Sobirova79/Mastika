import React, { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./index.module.scss";
import Container from "src/components/Container";
import { useForm } from "react-hook-form";
import Button from "src/components/Button";
import { useNavigate, useParams } from "react-router-dom";
import useQueryString from "src/hooks/useQueryString";
import PhoneInput from "src/components/BaseInputs/PhoneInput";
import orderMutation from "src/hooks/mutation/order";
import useOrder from "src/hooks/useOrder";
import dayjs from "dayjs";
import {
  FillingArr,
  PortionNumbers,
  complexityArr,
  floorsArr,
  orderStatus,
  payments,
  systems,
} from "src/utils/helpers";
import { FirstlyPayment, OrderStatus } from "src/utils/types";
import { useNavigateParams } from "src/hooks/useCustomNavigate";
import Loading from "src/components/Loader";
import BaseInput from "src/components/BaseInputs";
import useCategories from "src/hooks/useCategories";
import MainSelect from "src/components/BaseInputs/MainSelect";
import { InputStyle } from "src/components/BaseInputs/MainInput";
import MainInput from "src/components/BaseInputs/MainInput";
import useFillings from "src/hooks/useFillings";
import MainRadioBtns from "src/components/BaseInputs/MainRadioBtns";
import MainDatePicker from "src/components/BaseInputs/MainDatePicker";
import { baseURL } from "src/main";

export enum OrderModal {
  deny = 1,
  image = 2,
}

const OrderSettings: React.FC = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const { data, refetch, isLoading } = useOrder({
    id: Number(id),
    enabled: !!id,
  });
  const { data: categories } = useCategories({});
  const { data: filling } = useFillings({
    ptype: watch("filling_type"),
    enabled: !!watch("filling_type"),
  });
  const order = data?.order?.[0];
  const navigateParams = useNavigateParams();
  const [prepay, $prepay] = useState(true);
  const [phone, $phone] = useState("");
  const [extraphone, $extraphone] = useState("");
  const [delivery_date, $delivery_date] = useState("");
  const [updated_at, $updated_at] = useState("");
  const [created_at, $created_at] = useState<string>();
  const [client, $client] = useState("");
  const [activeCateg, $activeCateg] = useState<number>();
  const navigate = useNavigate();

  const { mutate } = orderMutation();
  const onSubmit = () => {
    const {
      order_user,
      phone_number,
      extra_number,
      payment_type,
      is_delivery,
      comment,
      reject_reason,
      created_at,
      updated_at,
      deliver_date,
      status,
      address,
      apartment,
      home,
      near_to,
      lat,
      long,
    } = getValues();

    mutate(
      {
        id: Number(id),
        order_user,
        phone_number,
        extra_number,
        payment_type,
        is_delivery,
        comment,
        reject_reason,
        created_at,
        updated_at,
        deliver_date,
        status,
        address,
        apartment,
        home,
        near_to,
        lat,
        long,
      },
      {
        onSuccess: () => {
          refetch();
          navigate("/applications?update=1");
        },
      }
    );
  };

  useEffect(() => {
    if (order && id) {
      if (order.order_vs_category?.id) $activeCateg(order.order_vs_category.id);
      $phone(order?.phone_number);
      $extraphone(order?.extra_number);
      $client(order?.order_user);
      $delivery_date(order?.deliver_date);
      $updated_at(order?.updated_at);
      $created_at(order.created_at);
      $prepay(!!order?.firstly_payment);
      resetColors();
      resetFillings();

      reset({
        order_type: !order?.is_delivery ? "Самовывоз" : "Доставка",
        client: order?.order_user,
        address: order?.address,
        payment_type: order?.payment_type,
        operator: order.order_vs_user?.username,
        comment: order?.comment,
        system: !order.is_bot ? 2 : 1,
        complexity: order.complexity,
        packaging: order.packaging,
        portion: order.portion,
        house: order.apartment,
        home: order.home,
        refAddr: order.near_to,
        color_details: order.color_details,
        floors: order.order_fill.length,
        reject_reason: order.reject_reason,
        filling_type: order?.order_fill?.[0]?.filler?.ptype,
        delivery_date: order?.deliver_date,
        created_at: order?.created_at,
        status: order?.status,
        ...(!order.is_delivery && { branch: order.order_br?.branch_dr?.name }),
      });
    }
  }, [order]);

  const handleStatus = (status: OrderStatus) => {
    mutate(
      {
        status,
        id: Number(id),
        reject_reason: getValues("cancel_reason"),
      },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
  };

  const resetFillings = useCallback(() => {
    setTimeout(() => {
      if (!!order?.order_fill.length) {
        order.order_fill.map((item) => {
          setValue(`filling${item.floor}`, item.filling_id);
        });
      }
    }, 300);
  }, [order?.order_fill]);

  const resetColors = useCallback(() => {
    if (!!order?.color) {
      setTimeout(() => {
        Object.keys(order?.color).map((item) => {
          setValue(`color${item}`, order?.color?.[item]);
        });
      }, 300);
    }
  }, [order?.color, order?.color_details]);

  const renderPrepay = useMemo(() => {
    return (
      <BaseInput label={"Предоплата"}>
        <MainRadioBtns
          value={prepay}
          onChange={(e) => $prepay(e)}
          values={[
            { id: FirstlyPayment.yes, name: "Да" },
            { id: FirstlyPayment.no, name: "Полностью" },
          ]}
        />
      </BaseInput>
    );
  }, [prepay]);

  const renderCategs = useMemo(() => {
    return (
      <div className=" ml-6 w-[1230px]">
        <div className={styles.bottom__title}>
          <p>Направление / Оформление</p>
        </div>
        <div className="mt-4 flex items-center h-full relative">
          <BaseInput className="flex w-full gap-10 bg-mainGray p-3 rounded-md flex-1 overflow-x-auto flex-wrap ">
            {categories?.map((item, idx) => {
              return (
                <label
                  className="flex gap-2"
                  key={idx}
                  onClick={() => $activeCateg(item.id)}
                >
                  <input
                    type="radio"
                    onChange={() => null}
                    checked={item.id === activeCateg}
                  />
                  {item.name}
                </label>
              );
            })}
          </BaseInput>
        </div>
      </div>
    );
  }, [activeCateg, categories]);
  const floors = Number(watch("floors"));

  const renderFloors = useMemo(() => {
    return (
      <>
        <BaseInput label="Этажность" className="mb-2 flex flex-col w-60">
          <MainSelect
            values={floorsArr}
            inputStyle={InputStyle.primary}
            register={register("floors")}
          />
        </BaseInput>

        <BaseInput
          label="Количество порции"
          className="mb-2 flex flex-col w-60"
        >
          <MainSelect register={register("portion")}>
            <option value={undefined} />
            {!!floors &&
              PortionNumbers[floors].map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
          </MainSelect>
        </BaseInput>
        {!!floors &&
          [...Array(floors)].map((_, item) => (
            <BaseInput
              label={`Начинка ${item + 1} этаж`}
              className="mb-2 flex flex-col w-60"
              key={item}
            >
              <MainSelect
                values={filling}
                inputStyle={InputStyle.primary}
                register={register(`filling${item + 1}`)}
              />
            </BaseInput>
          ))}
        {!!floors &&
          [...Array(floors)].map((_, item) => (
            <BaseInput
              label={`Палитра ${item + 1} этаж`}
              className="mb-2 flex flex-col w-60"
              key={item}
            >
              <MainInput register={register(`color${item + 1}`)} />
            </BaseInput>
          ))}
      </>
    );
  }, [watch("floors"), filling, order?.order_fill, order?.portion]);

  const [uploadedImg, $uploadedImg] = useState<{ name: string; url: string }>();

  const renderImg = useMemo(() => {
    return (
      <div className="flex gap-4 mt-4">
        <div className="">
          <div className="mb-3 flex">{uploadedImg?.name} : </div>
          <img
            src={`${baseURL}/files${uploadedImg?.url}`}
            height={100}
            width={100}
          />
        </div>
      </div>
    );
  }, [uploadedImg?.url]);

  const renderSampleImage = useMemo(() => {
    return (
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <p>Примерный вариант торта</p>
          <Button
            type="button"
            text="Добавить"
            className="bg-darkBlue mt-4 w-64 text-white"
            onClick={() => navigateParams({ modal: OrderModal.image })}
          />
        </div>

        {/* <div className="w-full flex flex-wrap gap-4 mt-8">
          {order?.images.map((item) => (
            <img
              src={`${baseURL}/${item}`}
              className="object-contain max-w-xs w-full"
              alt="uploaded-image"
              key={item}
            />
          ))}
        </div> */}
        <div className="border-b w-full mt-4" />
      </div>
    );
  }, [order?.images]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className={styles.top}>Изменение заказа</div>
        <Container className={styles.container}>
          <div className={styles.block}>
            <div className={styles.left__block}>
              <div className="">
                <div className={styles.titles}>
                  <p className={styles.title__id}>Заказ № {id}</p>
                  <p className={styles.title__status}>
                    Статус: {orderStatus(order?.status).text}
                  </p>
                </div>

                <div className={styles.details__inform}>
                  <BaseInput label="Тип заказа">
                    <MainInput
                      placeholder={"Тип заказа"}
                      className={styles.input}
                      register={register("order_type")}
                    />
                  </BaseInput>
                </div>

                <div className={styles.details__inform}>
                  <BaseInput label="Клиент">
                    <MainInput
                      placeholder={"Клиент"}
                      className={styles.input}
                      register={register("client")}
                    />
                  </BaseInput>
                </div>

                <div className={styles.details__inform}>
                  <BaseInput label="Гость / Клиент">
                    <PhoneInput
                      className={styles.selector}
                      placeholder="Введите номер"
                      onChange={$phone}
                      value={phone}
                      disabled
                    />
                  </BaseInput>
                </div>

                <div className={styles.details__inform}>
                  <BaseInput label="Менеджер / Управляющий магазина">
                    <PhoneInput
                      className={styles.selector}
                      placeholder="Введите номер"
                      onChange={$extraphone}
                      value={extraphone}
                    />
                  </BaseInput>
                </div>
                <div className={styles.details__inform}>
                  <BaseInput label="Дата оформления">
                    <MainDatePicker
                      disabled
                      placeholder="Дата оформления"
                      onChange={$created_at}
                      selected={
                        created_at ? dayjs(created_at).toDate() : undefined
                      }
                    />
                  </BaseInput>
                </div>

                <div className={styles.details__inform}>
                  <BaseInput label="Дата поставки">
                    <MainDatePicker
                      placeholder="Дата поставки"
                      onChange={$delivery_date}
                      disabled
                      selected={
                        delivery_date
                          ? dayjs(delivery_date).toDate()
                          : undefined
                      }
                    />
                  </BaseInput>
                </div>

                <div className={styles.details__inform}>
                  {order?.is_delivery ? (
                    <>
                      <BaseInput label="Адрес доставки">
                        <MainInput register={register("address")} />
                      </BaseInput>
                    </>
                  ) : (
                    <BaseInput label="Филиал">
                      <MainInput register={register("branch")} />
                    </BaseInput>
                  )}
                </div>
              </div>

              {errors?.root && <span>{errors.root?.message?.toString()}</span>}
            </div>

            <div className={styles.right__block}>
              <div className={styles.prepayment}>{renderPrepay}</div>

              <div className={styles.pay__form}>
                <BaseInput label="Способ оплаты">
                  <MainSelect
                    values={payments}
                    inputStyle={InputStyle.primary}
                    register={register("payment_type")}
                  />
                </BaseInput>
              </div>

              <div className={styles.branch__form}>
                <BaseInput label="Система">
                  <MainSelect
                    values={systems}
                    register={register("system")}
                    inputStyle={InputStyle.primary}
                  />
                </BaseInput>
              </div>

              {/* <div className=""> */}
              <div className={styles.operator__form}>
                <BaseInput label="Оператор">
                  <MainInput disabled register={register("operator")} />
                </BaseInput>
              </div>

              <div className={styles.comments}>
                <p>Комментарии</p>
                <textarea
                  placeholder="Введите комментарии"
                  cols={50}
                  rows={6}
                  wrap="hard"
                  className={styles.comments__textarea}
                  {...register("comment")}
                ></textarea>
              </div>
              {/* </div> */}
            </div>
          </div>
          <div className={styles.button__next}>
            <Button type={"submit"} text={"Сохранить"} />
          </div>

          <div className={styles.border__bottom} />
          {renderCategs}
          {!!activeCateg && (
            <>
              <div className="mt-6 flex flex-wrap ml-6 gap-4 min-h-[150px]">
                <BaseInput
                  label="Сложность"
                  className="mb-2  flex flex-col w-60 "
                >
                  <MainSelect
                    values={complexityArr}
                    inputStyle={InputStyle.primary}
                    register={register("complexity")}
                  />
                </BaseInput>

                <BaseInput
                  label="Тип начинки"
                  className="mb-2 flex flex-col w-60"
                >
                  <MainSelect
                    inputStyle={InputStyle.primary}
                    values={FillingArr}
                    register={register("filling_type")}
                  />
                </BaseInput>
                {renderFloors}
                <BaseInput
                  label="Цвет деталей"
                  className="mb-2 flex flex-col w-60"
                >
                  <MainInput
                    inputStyle={InputStyle.primary}
                    register={register("color_details")}
                  />
                </BaseInput>

                {/* {renderImg} */}
              </div>
            </>
          )}
          {/* {renderSampleImage} */}
          {order?.status === OrderStatus.new && (
            <div className="flex  items-center justify-end gap-3 mr-6 pt-28">
              <Button
                type="submit"
                onClick={() => handleStatus(OrderStatus.rejected)}
                className={styles.button__cancel}
                text="Отклонить"
              />

              <Button
                type="submit"
                onClick={() => handleStatus(OrderStatus.accepted)}
                className={styles.button__receive}
                text="Принять"
              />
            </div>
          )}

          {isLoading && <Loading />}
        </Container>
      </div>
    </form>
  );
};

export default OrderSettings;
