import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png"; 
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import burger4 from "../../assets/burger4.png";
import burger5 from "../../assets/burger5.png";
import burger6 from "../../assets/burger6.png";
import fries1 from "../../assets/fries1.png";
import coke1 from "../../assets/coke1.png";
import milkshake1 from "../../assets/milkshake1.png";

const Menu = () => {
    const addToCartHandler = (itemNum) => {};

    return (
        <section id="menu">
            <h1>MENU</h1>

            <div class = "menu-first">
                <MenuCard itemNum={1} burgerSrc={burger1} 
                price={2.50}
                title="Cheese Burger" 
                info="Enjoy the cheesy deliciousness Cheeseburger! Our simple, classic cheeseburger begins with a 100% pure beef burger patty seasoned with just a pinch of salt and pepper."
                cal="300"
                delay={0.1}
                handler={addToCartHandler} 
                />

                <MenuCard itemNum={6} burgerSrc={burger6} 
                price={7.5}
                title="Double Quarter Pounder with Cheese" 
                info="Double Quarter Pounder with Cheese features two quarter pound 100% fresh beef burger patties that are hot, deliciously juicy and cooked when you order. "
                cal="740"
                delay={0.1}
                handler={addToCartHandler}
                />

                <MenuCard itemNum={3} burgerSrc={burger3} 
                price={1.5}
                title="The Classic" 
                info="The Classic Humburger starts with a 100% pure beef patty seasoned with just a pinch of salt and pepper. It is topped with a tangy pickle, chopped onions, ketchup, and mustard."
                cal="250"
                delay={0.8}
                handler={addToCartHandler}
                />
            </div>

            <div class = "menu-second">
                <MenuCard itemNum={4} burgerSrc={burger4} 
                price={5.00}
                title="Quarter Pounder with Cheese" 
                info="Quarter Pounder with Cheese burger features a ¼ lb. of 100% fresh beef that’s hot, deliciously juicy. Each burger is topped with slivered onions"
                cal="520"
                delay={0.8}
                handler={addToCartHandler} 
                />

                <MenuCard itemNum={5} burgerSrc={burger5} 
                price={5.5}
                title="Quarter Pounder with Cheese Bacon" 
                info="Quarter Pounder with Cheese Bacon burger features thick-cut applewood smoked bacon atop a ¼ lb. of 100%  fresh beef that's cooked when you order."
                cal="630"
                delay={0.5} 
                handler={addToCartHandler}
                />

                <MenuCard itemNum={2} burgerSrc={burger2} 
                price={3.5}
                title="Double Cheeseburger" 
                info="Double Cheeseburger features two 100% pure all beef patties. It's topped with tangy pickles, chopped onions, ketchup, mustard, and two melty American cheese slices."
                cal="450"
                delay={0.5} 
                handler={addToCartHandler}
                />
                
            
            </div>

            <div class = "menu-third">
                <MenuCard itemNum={7} burgerSrc={fries1} 
                price={2.00}
                title="World Famous Fries" 
                info="World Famous Fries are made with premium potatoes, these epic fries are crispy and golden on the outside and fluffy on the inside."
                cal="320"
                delay={0.1}
                handler={addToCartHandler} 
                />

                <MenuCard itemNum={8} burgerSrc={coke1} 
                price={1.0}
                title="World Famous Coca-Cola" 
                info="World Famous Coca-Cola is a refreshing soda option that complements all of your menu favorites. Have you ever wondered, is Coke best?"
                cal="210"
                delay={0.5} 
                handler={addToCartHandler}
                />
                
                <MenuCard itemNum={9} burgerSrc={milkshake1} 
                price={1.5}
                title="Hot Caramel Sundae" 
                info="Treat yourself to a Hot Caramel Sundae! This Caramel Sundae combines creamy vanilla soft serve and warm, buttery caramel topping."
                cal="330"
                delay={0.8}
                handler={addToCartHandler}
                />
            </div>

        </section>
    );
};

export default Menu;