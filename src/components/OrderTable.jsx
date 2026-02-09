import items from "../data/items";
import OrderRow from "../components/OrderRow";
import "../App.css";

function OrderTable() {
  return (
    <>
      <table className = "order-table">
        <thead className = "table-header">
          <tr>
            <th className = "table-name-header">Name</th>
            <th className = "table-price-header">Price</th>
            <th className = "table-quantity-header">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <OrderRow item={item} key={i} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default OrderTable;
