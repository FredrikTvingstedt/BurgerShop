import React from "react";
import { Link } from "react-router-dom";
import { Button} from "react-bootstrap";
import me from "../../assets/profile.png";

const About = () => { return (
    <section className="about">
        <main>
            <h1>About Us</h1>
        
            <article>
                <h4>Burger Shop</h4>
                <p>This is Burger Shop. The place for most tasty burgers on the enitre earth.</p>
                <p>Explore the various type of food and burgers. Click below to see the menu</p>
                <div className="about-center">
                    <Link to="/menu">
                    <Button className="custom-button">menu</Button>
                    </Link>
                 </div>
            </article>
        
            <div>
                <h2>Founder</h2>
                <article>
                    <div>
                    <img src={me} alt="Founder" />
                    </div>
                    <p>I am Fredrik, the founder of Burger Shop. Affiliated to God Taste...</p>
                </article>
            </div>
        </main>
    </section>
);
};
export default About;