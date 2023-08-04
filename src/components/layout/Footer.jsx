import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => { 
    return (
        <footer>
            <div>
                <h2>BurgerShop</h2>
                <em>We are trying to give you the best taste possible.</em>
            </div>

            <aside>
                <h4>Follow Us</h4>
                <a href="https://github.com/FredrikTvingstedt/" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub />
                </a>
            </aside>
        </footer>
    );
};

export default Footer;
