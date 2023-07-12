import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Contact from "./components/contact/Contact";
import NotFound from "./components/notfound/NotFound";
import Shipping from "./components/cart/Shipping";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import MyOrders from "./components/myOrders/MyOrders";
import { Store } from "./pages/Store";
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

import OrderDetails from "./components/myOrders/OrderDetails";
import About from "./components/about/About";

import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/about.scss";
import "./styles/notfound.scss";

function App() {
  return (
    <ShoppingCartProvider>  
      <Router>
        <Header isAuthenticated={true} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/me" element={<Profile />} />
          <Route path="/store" element={<Store />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/order/:id" element={<OrderDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;
