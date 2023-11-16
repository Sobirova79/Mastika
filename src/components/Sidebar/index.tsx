import { NavLink, useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const menuItem = [
  {
    path: "/main",
    name: "Главная страница",
  },
  {
    path: "/search",
    name: "Поиск",
  },
  {
    path: "/applications",
    name: "Все заявки",
  },
  {
    path: "/received-orders",
    name: "Принятые заказы",
  },
  {
    path: "/products",
    name: "Товары",
  },
  {
    path: "/categories",
    name: "Категории",
  },
  {
    path: "/fillings",
    name: "Начинки",
  },
  {
    path: "/clients",
    name: "Клиенты",
  },
  {
    path: "/comments",
    name: "Отзывы",
  },
  {
    path: "/users",
    name: "Пользователи",
  },
  {
    path: "/filials",
    name: "Филиалы",
  },

  {
    path: "/roles",
    name: "Роли",
  },
  {
    path: "/settings",
    name: "Настройки",
  },
];

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__main}>
        <div className={styles.main__image}>
          <a href="/main">
            <img
              // className="main__img"
              src="/assets/images/main_img.svg"
              alt="main"
            />
          </a>
        </div>
        {menuItem.map((item, index) => (
          <NavLink className="w-50 " to={item.path} key={index}>
            <div className={styles.item__name}>{item.name}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
