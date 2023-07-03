import React from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Popup from 'reactjs-popup';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    // Configure email parameters
    const emailParams = {
      to_email: "burgershop@dotnet.nu",
      to_name: "Admin",
      from_name: "userName",
      from_email: "userEmail@exempel.com",
      message: "This is the email message.",
    };

    // Send email using emailjs
    emailjs.send(
      "service_ni3i1er",
      "template_txjhaon",
      emailParams,
      "lxgOFrVQtj196ZPra"
    )
    .then((response) => {
      console.log("Email sent:", response.status);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
  };

  return (
    <section className="contact">
      <motion.form
        initial={{
          x: "-100vw",
          opacity: 0,
        }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
   
        <h2>Contact Us</h2>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message..." cols="30" rows="20"></textarea>
        <button type="submit" onClick={sendEmail}>Send</button>
       
      </motion.form>
    </section>
  );
};

export default Contact;


