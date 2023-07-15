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
    <section className="orderDetails">
      <main>
       
          <h1>Order Details</h1>
        <div>
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
            <b>Country:</b> {shippingDetails.country}
          </p>
          <p>
            <b>State:</b> {shippingDetails.state}
          </p>
          <p>
            <b>Phone Number:</b> {shippingDetails.phoneNumber}
          </p>
          <h1>Contact</h1>
          <p>
          <b>Name</b> Add Info
          </p>
          <p>
          <b>Phone Number:</b> Add Info
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
          <b>Payment Reference</b> #00001
          </p>
          <h1>Order Summary</h1>
          <p>
          <b>Sub total:</b> {formatCurrency(subtotal)}
          </p>
          <p>
          <b>Tax (12%):</b> {formatCurrency(tax)}
          </p>
        
         
          <p>
            Shipping Charges:{" "}
            {shippingCharges === 0 ? "Free Shipping" : formatCurrency(shippingCharges)}
          </p>
          <p>Total: {formatCurrency(total)}</p>

          <h1>Ordered items</h1>
          {cartItems.map((cartItem) => {
            const item = storeItems.find((i) => i.id === cartItem.id);
            return (
              <div key={cartItem.id}>
                <p>
                <b>{item?.name}</b> {formatCurrency(item?.price)} x {cartItem.quantity}
                </p>
              </div>
              
            );
            
          })}
            <p>Sub total: {formatCurrency(subtotal)}</p>
      
        </div>
      </main>
    </section>  
  );
};

export default OrderDetails;
