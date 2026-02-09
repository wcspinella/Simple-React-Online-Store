import React from "react";
import "../App.css";
import SelectQuantity from "./SelectQuantity";

function OrderRow({ item }) {
  return (
    <tr className="menu-item">
      <td className="row-name">{item.name}</td>
      <td className="row-price">{item.price}</td>
      <td className = "row-quantity">
        <SelectQuantity />
      </td>
    </tr>
  );
}
export default OrderRow;
