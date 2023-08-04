import React from "react";
import { motion } from "framer-motion"; 
import Founder from "./Founder";
import { Menu } from "./Menu";

const Home = () => {
    const options = {
        initial: { 
            x: "-100%",
            opacity: 0,
        },
        whileInView: {
            x: 0,
            opacity: 1,
        },
    };

return (
    <>
        <section className="home">
            <div>
                <motion.h1 {...options}>Burger Shop</motion.h1>
                <motion.p  
                    className="burger-text"
                        {...options}
                        transition={{
                        delay: 0.2,
                    }}
            >   
                Give yourself a tasty burger.
                </motion.p>
            </div>

            <motion.a className="explore-button"
                href="/home/#menu" 
                initial={{
                y: "-100%",
                opacity: 0,
            }}
                whileInView={{
                y: 0,
                opacity: 1,
            }}
                transition={{
                delay: 0.4,
            }}

            >
                Explore Menu
            </motion.a>

        </section>
        
    <Menu />

    <Founder />

</>
);
};
export default Home;