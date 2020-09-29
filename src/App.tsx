import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Products from "./components/pages/Products";
import Default from "./components/pages/Default";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import CopyRight from "./components/layouts/CopyRight";
import Details from "./components/pages/Details";
import Cart from "./components/pages/Cart";
import Contact from "./components/pages/Contact";
import Product from "./components/pages/Product";
import CreateAccount from "./components/pages/CreateAccount";
import Red from "./components/pages/Red";
import Black from "./components/pages/Black";
import Green from "./components/pages/Green";
import White from "./components/pages/White";
import Women from "./components/pages/Women";
import Men from "./components/pages/Men";
import Kids from "./components/pages/Kids";
import BestSeller1 from "./components/pages/BestSeller";
import Dashboard from "./components/pages/Dashboard";
import EditAccount from "./components/pages/EditAccount";
import ShowUsers from './components/pages/ShowUsers';
import EditUser from "./components/pages/EditUser"
import EditProduct from "./components/pages/EditProduct"

const App: React.FC = ():JSX.Element => (
  <>
    <Header />
    <div id="wrapper" className="container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/register" component={CreateAccount} />
        <Route exact path="/bestseller" component={BestSeller1} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/editaccount" component={EditAccount} />
        <Route exact path="/showusers" component={ShowUsers} />
        <Route exact path="/editusers" component={EditUser} />
        <Route exact path="/editproducts" component={EditProduct} />
        <Route exact path="/details/:id" component={Details} />
        <Route exact path="/product/women" component={Women} />
        <Route exact path="/product/men" component={Men} />
        <Route exact path="/product/kids" component={Kids} />
        <Route exact path="/product/red" component={Red} />
        <Route exact path="/product/black" component={Black} />
        <Route exact path="/product/green" component={Green} />
        <Route exact path="/product/white" component={White} />
        <Route exact component={Default} />
      </Switch>
      <Footer />
      <CopyRight />
    </div>
  </>
);

export default App;
