import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MyOrders = () => {
  const arr = [1];

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Order Details</th>
            </tr>
          </thead>

          <tbody>
            {arr.map((i) => (
            <tr key={i}>
            <td>#00001</td>
            <td>Processing</td>
            <td>Add Info</td>
            <td>Add Info</td>
            <td>COD</td>
            <td>
            <Link to={`/order/${"00001"}`}>
            <AiOutlineEye />
            </Link>
            </td>
            </tr>
            ))}
            </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
