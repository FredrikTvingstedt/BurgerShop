import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Popup from 'reactjs-popup';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please enter your name.");
      return;
    }

    if (!email || !validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!message) {
      setError("Please enter your message.");
      return;
    }

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
      setError("");
      // Clear form fields
      setName("");
      setEmail("");
      setMessage("");
      setShowPopup(true);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      setError("An error occurred while sending the email.");
    });
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const closePopup = () => {
    setShowPopup(false);
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
        {error && <p className="error">{error}</p>}
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
      <Popup open={showPopup} onClose={closePopup}>
        <div style={{color:"green", backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>
          <h3>Email sent successfully</h3>
          <p>Thank you for contacting us! We will get back to you shortly.</p>
        </div>
      </Popup>
    </section>
  );
};

export default Contact;
