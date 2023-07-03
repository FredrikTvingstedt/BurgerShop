import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Popup from 'reactjs-popup';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // Configure email parameters
    const emailParams = {
      to_email: "burgershop@dotnet.nu",
      to_name: "Admin",
      from_name: name,
      from_email: email,
      message: message,
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
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Message..."
          cols="30"
          rows="20"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit" onClick={sendEmail}>Send</button>
      </motion.form>
    </section>
  );
};

export default Contact;
