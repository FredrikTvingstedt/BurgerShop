import React from "react";
import { motion } from "framer-motion";
import Popup from 'reactjs-popup';

const MenuCard = ({ itemNum, burgerSrc, price, title, info, cal, handler, delay = 0 }) => {
  return (
    <motion.div
      className="menuCard"
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay,
      }}
    >
      <div></div>
      <main>
        <img src={burgerSrc} alt={itemNum} />
        <h5>${price}</h5>
        <p>{title}</p>
        <p>{info}</p>
        <p>{cal}Cal.</p>
        <Popup trigger=
          {<button onClick={() => handler(itemNum)}>Buy Now</button>}
            >
              <div style={{color:"black", transform: 'translate(0%,-300%)', backgroundColor: 'lightgreen', padding: '15px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>
                <p>Added to cart!</p>
                <p>+${price}</p>
              </div>
        </Popup>
      </main>
    </motion.div>
  );
};

export default MenuCard;
