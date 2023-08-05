import { Button, Navbar as NavbarBs } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";
import DropdownMenu from "./DropdownMenu";
import { useAuth } from "../../context/AuthContext"; // Import the useAuth hook

export function Header() {
  const { openCart, cartQuantity } = useShoppingCart();
  const { user } = useAuth(); // Access the user object from the useAuth hook

  return (
    <NavbarBs>
      <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
          <IoFastFoodOutline/>
      </motion.div>

      <div className="d-flex justify-content-end align-items-center">
        {user ? ( // Check if the user is logged in
          <>
            {cartQuantity >= 0 && (
              <Button
                onClick={openCart}
                style={{ position: "relative" }}
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
          </>
        ) : null} {/* If the user is not logged in, do not show the cart and dropdown menu */}
        <div className="about-button">
          {user ? null : ( // If the user is not logged in, show the About button
          
            <Link to="/about">
              <Button className="custom-button">About</Button>
            </Link>
          )}
        </div>
        <div className="contact-button">
          {user ? null : ( // If the user is not logged in, show the Contact button
          
            <Link to="/contact">
              <Button className="custom-button">Contact</Button>
            </Link>
          )}
        </div>
        <div className="login-button">
          {user ? null : ( // If the user is not logged in, show the Login button
          
            <Link to="/">
              <Button className="custom-button">Login</Button>
            </Link>
          )}
        </div>
     
      </div>
    </NavbarBs>
  );
}

export default Header;
