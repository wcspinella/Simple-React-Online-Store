import { Link } from "react-router-dom";
import "../App.css";

function Navigation() {
  return (
    <nav className="app-nav">
      <Link to="/" className="home-link">
        Home
      </Link>
      <Link to="/order" className="order-link">
        Order
      </Link>
      <Link to="/registration" className="registration-link">
        Registration
      </Link>
    </nav>
  );
}

export default Navigation;
