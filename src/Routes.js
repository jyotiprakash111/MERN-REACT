import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashboard from "./user/UserDashBoard";
import AdminDashboard from "./user/AdminDashBoard";
import Addcategory from "./admin/AddCategory";
import Managecategories from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "../src/admin/UpdateProduct";

import DemoDrop from "./demo";

// import UpdateProduct
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/signin' exact component={Signin} />
        <PrivateRoute path='/user/dashboard' exact component={UserDashboard} />
        <AdminRoute path='/admin/dashboard' exact component={AdminDashboard} />
        <AdminRoute
          path='/admin/create/category'
          exact
          component={Addcategory}
        />
        <AdminRoute
          path='/admin/categories'
          exact
          component={Managecategories}
        />
        <AdminRoute path='/admin/create/product' exact component={AddProduct} />
        <AdminRoute path='/admin/products' exact component={ManageProducts} />
        <AdminRoute
          path='/admin/product/update/:productId'
          exact
          component={UpdateProduct}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
