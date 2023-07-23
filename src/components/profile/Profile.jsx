import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


const Profile = () => {
  const user = useAuth().user; 
  const maskPassword = (password) => {
    let maskedPassword = '';
    for (let i = 0; i < password.length; i++) {
      if (i % 2 === 0) {
        maskedPassword += password[i];
      } else {
        maskedPassword += '*';
      }
    }
    return maskedPassword;
  };
  
  const maskedPassword = maskPassword(user.password);
  const options = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <section className="profile">
      <main>
        <motion.img src={user.imgUrl} alt="User" {...options} />
        <motion.h5 {...options} transition={{ delay: 0.3 }}>
          {user.name}
        </motion.h5>
        <motion.p>
        <b>Email: </b>{user.email}
        </motion.p>
        <motion.p>
        <b>Phonenumber: </b>{user.phonenumber}
        </motion.p>
        <motion.p>
          <b>Username: </b> {user.username}
        </motion.p>
        <motion.p>
          <b>Password: </b> {maskedPassword}
        </motion.p>
        <motion.div
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
        >
          <Link to="/myorders">Orders</Link>
        </motion.div>
      </main>
    </section>
  );
};

export default Profile;
