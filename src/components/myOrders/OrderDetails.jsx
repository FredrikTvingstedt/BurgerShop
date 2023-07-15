import React from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useShippingDetails } from "../../context/ShippingDetailsContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import storeItems from "../../data/items.json";

const OrderDetails = () => {
  const { cartItems } = useShoppingCart();
  const { shippingDetails } = useShippingDetails();

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
    <div>
      <h1>My Orders</h1>

      <h2>Shipping Details</h2>
      <p>
        <strong>Street Address:</strong> {shippingDetails.streetAddress}
      </p>
      <p>
        <strong>Zip Code:</strong> {shippingDetails.zipCode}
      </p>
      <p>
        <strong>City:</strong> {shippingDetails.city}
      </p>
      <p>
        <strong>Country:</strong> {shippingDetails.country}
      </p>
      <p>
        <strong>State:</strong> {shippingDetails.state}
      </p>
      <p>
        <strong>Phone Number:</strong> {shippingDetails.phoneNumber}
      </p>

      <h2>Order Details</h2>
      {cartItems.map((cartItem) => {
        const item = storeItems.find((i) => i.id === cartItem.id);
        return (
          <div key={cartItem.id}>
            <h3>{item?.name}</h3>
            <p>Quantity: {cartItem.quantity}</p>
            <p>Price: {formatCurrency(item?.price)}</p>
          </div>
        );
      })}

      <h2>Order Summary</h2>
      <p>Subtotal: {formatCurrency(subtotal)}</p>
      <p>Tax (12%): {formatCurrency(tax)}</p>
      <p>
        Shipping Charges:{" "}
        {shippingCharges === 0 ? "Free Shipping" : formatCurrency(shippingCharges)}
      </p>
      <p>Total: {formatCurrency(total)}</p>
    </div>
  );
};

export default OrderDetails;
