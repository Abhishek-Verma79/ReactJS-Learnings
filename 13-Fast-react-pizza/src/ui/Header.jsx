import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";
import Username from "../features/user/Username.jsx";
function Header() {
  return (
    <header className="bg-yellow-500 uppercase tracking-widest " >
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;