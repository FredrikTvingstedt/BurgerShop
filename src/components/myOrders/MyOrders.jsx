import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useShippingDetails } from "../../context/ShippingDetailsContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import storeItems from "../../data/items.json";

const MyOrders = () => {
  const { cartItems } = useShoppingCart();
  const { shippingDetails } = useShippingDetails();

  // Calculate the total sum for all items in the cart
  const totalSum = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  const orderId = "00001";

  // Calculate the total quantity of items in the cart
  const totalQuantity = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

  // Check if shippingDetails.streetAddress is null or totalSum is 0
  if (!shippingDetails.streetAddress || totalSum === 0) {
    return (
        <section className="tableClass">
          <div className="myOrder">
            <main>
              <div className="no-orders">
                <h1>Sorry! There are no orders yet.</h1>
                <p>Feel free to place an order.</p>
              </div>
            </main>
          </div>
        </section>
    );
  }

  return (
    <section className="tableClass">
      <div className="myOrder">
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
                <td>{orderId}</td>
                <td>Processing</td>
                <td>{totalQuantity}</td>
                <td>{formatCurrency(totalSum)}</td>
                <td>COD</td>
                <td>
                <Link to={`/order/${orderId}`} state={{ orderId }}>
                <AiOutlineEye />
                </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </main>
      </div> 
    </section>
  );
};

export default MyOrders;
