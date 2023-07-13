import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../../data/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();

  // Calculate the subtotal
  const subtotal = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  // Calculate the tax
  const tax = subtotal * 0.12;

  // Define the shipping charges
  const shippingCharges = 10;

  // Calculate the total
  const total = subtotal + tax + shippingCharges;

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Sub Total {formatCurrency(subtotal)}
          </div>
          <div className="ms-auto fw-bold fs-5">
            Tax (12%) {formatCurrency(tax)}
          </div>
          <div className="ms-auto fw-bold fs-5">
            Shipping Charges {formatCurrency(shippingCharges)}
          </div>
          <div className="ms-auto fw-bold fs-5">
            Total {formatCurrency(total)}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
