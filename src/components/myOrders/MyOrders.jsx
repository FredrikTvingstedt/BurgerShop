import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useShippingDetails } from "../../context/ShippingDetailsContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import storeItems from "../../data/items.json";

const MyOrders = () => {
  const { cartItems } = useShoppingCart();

  // Calculate the total sum for all items in the cart
  const totalSum = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  // Calculate the total quantity of items in the cart
  const totalQuantity = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

  // Check if shippingDetails.streetAddress is null or subtotal is 0
  if (!useShippingDetails.streetAddress === null || totalSum === 0) {
    return null; // Return null to hide the order details section when conditions are not met
  }

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Total Sum</th>
              <th>Payment Method</th>
              <th>Order Details</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>#00001</td>
              <td>Processing</td>
              <td>{totalQuantity}</td>
              <td>{formatCurrency(totalSum)}</td>
              <td>COD</td>
              <td>
                <Link to={`/order/${"00001"}`}>
                  <AiOutlineEye />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
