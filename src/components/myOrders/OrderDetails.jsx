import React from "react";
import { useLocation } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useShippingDetails } from "../../context/ShippingDetailsContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import storeItems from "../../data/items.json";
import { useAuth } from "../../context/AuthContext";

const OrderDetails = () => {
  const { cartItems } = useShoppingCart();
  const { shippingDetails } = useShippingDetails();
  const location = useLocation();
  const orderId = location.state?.orderId || "";
  const user = useAuth().user; 

  // Calculate the subtotal
  const subtotal = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  // Calculate the tax
  const tax = subtotal * 0.12;

  // Calculate the shipping charge
  let shippingCharges = 4;

  if (subtotal < 1 || subtotal > 20) {
    shippingCharges = 0;
  }

  // Calculate the total
  const total = subtotal + tax + shippingCharges;

  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <p> 
            <b>Order Id:</b>#{orderId}
          </p>
          <h1>Shipping Details</h1>
          <p>
            <b>Street Address:</b> {shippingDetails.streetAddress}
          </p>
          <p>
            <b>Zip Code:</b> {shippingDetails.zipCode}
          </p>
          <p>
            <b>City:</b> {shippingDetails.city}
          </p>
          <p>
            <b>Phone Number:</b> {shippingDetails.phoneNumber}
          </p>
          <h1>Contact</h1>
          <p>
            <b>Name</b> {user.name}
          </p>
          <p>
            <b>Phone Number:</b> {user.phonenumber}
          </p>
          <p>
            <b>Email:</b> {user.email}
          </p>
          <h1>Status</h1>
          <p>
            <b>Order Status</b> Processing
          </p>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b> COD
          </p>
          <p>
            <b>Payment Reference</b> #{orderId}
          </p>
          <h1>Order Summary</h1>
          <p>
            <b>Sub total:</b> {formatCurrency(subtotal)}
          </p>
          <p>
            <b>Tax (12%):</b> {formatCurrency(tax)}
          </p>
          <p>
            <b>Shipping Charges:</b>{" "}
            {shippingCharges === 0 ? "Free Shipping" : formatCurrency(shippingCharges)}
          </p>
          <p>
            <b>Total:</b> {formatCurrency(total)}
          </p>
          <h1>Ordered items</h1>
          <div className="cart-items">
            {cartItems.map((cartItem) => {
              const item = storeItems.find((i) => i.id === cartItem.id);
              return (
                <div key={cartItem.id}>
                  <p>
                    <b>{item?.name}</b> {formatCurrency(item?.price)} <b>x</b> {cartItem.quantity} <b>pcs</b>
                  </p>
                </div>
              );
            })}
          </div>
          <p>
            <b>Sub total: </b> {formatCurrency(subtotal)}
          </p>
        </div>
      </main>
    </section>
  );
};

export default OrderDetails;
