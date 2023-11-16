import React, { useEffect } from "react";
import Sidebar from "../Sidebar";
import Main from "pages/Main";
import Applications from "pages/Applications";
import Categories from "pages/Categories";
import Fillings from "pages/Fillings";
import Palettes from "pages/Palettes";
import Products from "pages/Products";
import Filter from "../Filter";
import OrderCreator from "pages/OrderCreate";
import OrderDetails from "pages/OrderDetails";
import OrderSettings from "pages/OrderSettings";
import AddCategories from "pages/AddCategories";
import Login from "pages/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAppSelector } from "src/redux/utils/types";
import { tokenSelector } from "src/redux/reducers/auth";
import Show from "src/pages/CategoryShow";
import SubCategory from "src/pages/SubCategory";
import Comments from "src/pages/Comments";
import Users from "src/pages/Users";
import Roles from "src/pages/Roles";
import Notifications from "src/pages/Notifications";
import Settings from "src/pages/Settings";
import Search from "src/pages/Search";
import SubRole from "src/pages/SubRole";
import EditRole from "src/pages/EditRole";
import ShowSub from "src/pages/ShowSubCategory";
import AddRole from "src/pages/AddRoles";
import Filials from "src/pages/Filials";
import AddUser from "src/pages/AddUser";
import Clients from "src/pages/Clients";
import ShowOrder from "src/pages/ShowOrder";

const Navigations = () => {
  const navigate = useNavigate();

  const token = useAppSelector(tokenSelector);

  useEffect(() => {
    if (!token) navigate("/login");
  }, [token]);

  useEffect(() => {
    if (window.location.pathname === "/") navigate("/main");
  }, []);
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="flex-col">
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/search" element={<Main />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/received-orders" element={<ShowOrder />} />
            <Route
              path="/applications/:id/ordersettings"
              element={<OrderSettings />}
            />
            <Route path="/filter/ordercreator" element={<OrderCreator />} />
            <Route
              path="/ordercreator/orderdetails"
              element={<OrderDetails />}
            />
            <Route path="/categories" element={<Categories />} />
            <Route path="/subcategory" element={<SubCategory />} />
            <Route
              path="categories/:id/subcategory"
              element={<SubCategory />}
            />
            <Route
              path="/categories/addcategories"
              element={<AddCategories />}
            />
            <Route path="categories/:id/show" element={<Show />} />
            <Route path="/subcategory/:id/showsub" element={<ShowSub />} />
            <Route path="/fillings" element={<Fillings />} />
            <Route path="/palettes" element={<Palettes />} />
            <Route path="/products" element={<Products />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/login" element={<Login />} />
            <Route path="/filials" element={<Filials />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/users" element={<Users />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/users/adduser" element={<AddUser />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/roles/addrole" element={<AddRole />} />
            <Route path="/roles/:id/editrole" element={<EditRole />} />
            <Route path="/roles/:id/subrole" element={<SubRole />} />
            <Route path="/subrole/roles" element={<SubRole />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Navigations;
