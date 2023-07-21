import { Button, Navbar as NavbarBs } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";
import DropdownMenu from "./DropdownMenu";

export function Header() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs>
          <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
            <Link className="fastfood" to="/">
              <IoFastFoodOutline />
            </Link>
          </motion.div>
          
        <div className="d-flex justify-content-end align-items-center">
              {cartQuantity >= 0 && (
              <Button
                  
                  onClick={openCart}
                  style={{ position: "relative"}}
                  variant="dark"
              >
                  <FiShoppingCart size={20} />
                  <div
                      className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                      style={{
                          color: "white",
                          width: "1.5rem",
                          height: "1.5rem",
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                          transform: "translate(25%, 25%)",
                      }}
                      >
                      {cartQuantity}
                  </div>
              </Button>
              )}
              <div className="drop-drown-menu">
              <DropdownMenu />
              </div>
              <div className="login-button">
              <Link to="/login">
                <Button>Login</Button>
              </Link>
              </div>
          </div>
    </NavbarBs>
  );
}

export default Header;
