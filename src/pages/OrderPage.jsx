import "../App.css";
import OrderTable from "../components/OrderTable";

function OrderPage() {
  return (
    <>
      <h2 className="order-page-header">Online Ordering</h2>
      <p className = "order-page-phrase">Add items to your cart</p>
      <OrderTable />
    </>
  );
}

export default OrderPage;
