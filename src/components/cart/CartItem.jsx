import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import storeItems from "../../data/items.json";


export function CartItem({ id, quantity }) {
  const { increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      
      <div className="me-auto">
        <div>
          {item.name}{" "}
          <img
          src={item.imgUrl}
          alt={item.name}
          style={{ width: "50px", height: "50px", objectFit: "cover" }}
          />
        </div>
      </div>

      <div>  
        <div className="d-flex align-items-right justify-content-center">      
          <Button className="bg-dark" onClick={() => decreaseCartQuantity(item.id)}>-</Button> 
          <div className="quantity">  
          {quantity}    
          </div>
          <Button className="bg-dark" onClick={() => increaseCartQuantity(item.id)}>+</Button>
          </div>
        </div>
      
    </Stack>
  );
}


