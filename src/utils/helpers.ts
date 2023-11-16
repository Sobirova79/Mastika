import { QueryClient } from "@tanstack/react-query";
import { OrderStatus, PaymentTypes, SystemTypes, fillingType } from "./types";

export enum EPresetTimes {
  SECOND = 1000,
  MINUTE = SECOND * 60,
  HOUR = MINUTE * 60,
  DAY = HOUR * 24,
  WEEK = DAY * 7,
  TEN_DAYS = DAY * 10,
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: EPresetTimes.MINUTE * 10,
      staleTime: EPresetTimes.MINUTE * 5,
    },
  },
});

export const payments = [
  { id: PaymentTypes.payme, name: "Payme" },
  { id: PaymentTypes.cash, name: "Наличные" },
  { id: PaymentTypes.click, name: "click" },
];

export const systems = [
  { id: SystemTypes.mastika, name: "Отдел Мастики" },
  { id: SystemTypes.tg, name: "Телеграм бот" },
  { id: SystemTypes.web, name: "Сайт" },
];

export const StatusArr = [
  { id: OrderStatus.new, name: "Новый" },
  { id: OrderStatus.accepted, name: "Принят" },
  { id: OrderStatus.rejected, name: "Отклонён" },
];

export const complexityArr = [
  { id: 1, name: "Средний" },
  { id: 2, name: "Сложный" },
  { id: 3, name: "Гравитационный Свадебный" },
];
export const floorsArr = [
  { id: 1, name: "1 этажный" },
  { id: 2, name: "2 этажный" },
  { id: 3, name: "3 этажный" },
];

export const packageArr = [
  { id: 1, name: "Премиум" },
  { id: 2, name: "Бесплатная" },
];
export const FillingArr = [
  { name: "ПП", id: fillingType.pp },
  { name: "Премиум", id: fillingType.premium },
  { name: "Стандартная", id: fillingType.standart },
];
export const StatusName = [
  { name: "Активный", id: 1 },
  { name: "Не активный", id: 0 },
];

export const orderStatus = (status: OrderStatus | undefined) => {
  switch (status) {
    case OrderStatus.new:
      return { text: "Новый", color: "" };
    case OrderStatus.accepted:
      return { text: "Принят", color: "bg-lime-300" };
    case OrderStatus.rejected:
      return { text: "Отклонён", color: "bg-rose-300" };

    default:
      return {};
  }
};

export const getFillingType = (val: fillingType) => {
  switch (val) {
    case fillingType.pp:
      return "ПП";
    case fillingType.premium:
      return "Премиум";
    case fillingType.standart:
      return "Стандартная";

    default:
      break;
  }
};

export const PortionNumbers: { [key: number]: number[] } = {
  1: [7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27],
  2: [17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
  3: [37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57],
  4: [72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92],
};
