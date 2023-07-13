import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { formatCurrency } from '../../utilities/formatCurrency';
import Popup from 'reactjs-popup';
import { motion } from 'framer-motion';
import 'reactjs-popup/dist/index.css';

export function StoreItem({ id, name, price, imgUrl, delay }) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  const [showPopup, setShowPopup] = useState(false);

  const handleBuyNow = () => {
    increaseCartQuantity(id);
    setTimeout(() => setShowPopup(true), 100); // Delayed appearance of popup after 0.1 second
  };

  const slideVariants = {
    hidden: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideVariants}
      transition={{ delay }} // Individual delay for each item
    >
      <Card className="h-100">
        <div id="storeItem-top"></div>
        <Card.Img
          variant="top"
          src={imgUrl}
          height="350px"
          style={{ objectFit: 'cover' }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">{name}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
          </Card.Title>
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button
                className="w-100"
                onClick={handleBuyNow}
                style={{ backgroundColor: 'rgb(156, 0, 60)' }}
              >
                Buy Now
              </Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: '.5rem' }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: '.5rem' }}
                >
                  <Button
                    onClick={() => decreaseCartQuantity(id)}
                    style={{ backgroundColor: 'black' }}
                  >
                    -
                  </Button>
                  <div>
                    <span className="fs-3">{quantity}</span> in cart
                  </div>
                  <Button
                    onClick={() => increaseCartQuantity(id)}
                    style={{ backgroundColor: 'black' }}
                  >
                    +
                  </Button>
                </div>
                <Button
                  onClick={() => removeFromCart(id)}
                  variant="danger"
                  size="sm"
                  style={{ backgroundColor: 'rgb(156, 0, 60)' }}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
        {showPopup && (
          <Popup
            open={showPopup}
            onClose={() => setShowPopup(false)}
            modal
            closeOnDocumentClick
            contentStyle={{
              backgroundColor: 'white',
              color: 'black',
              padding: '15px',
              borderRadius: '5px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
              width: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <span>Item added to cart!</span>
          </Popup>
        )}
      </Card>
    </motion.div>
  );
}
