import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBBtn, MDBInput, MDBModal, MDBModalDialog, MDBModalContent, MDBModalBody, MDBModalFooter } from "mdb-react-ui-kit";
import { useAuth } from "../../context/AuthContext";
import usersData from "../../data/users.json";

function Login() {
  const [justifyActive, setJustifyActive] = useState("tab1");
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility
  const [incorrectCredentialsModal, setIncorrectCredentialsModal] = useState(false); // State to control incorrect credentials modal
  const { login, user, logout } = useAuth(); // Access the login, user, and logout functions from the useAuth hook

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  const handleSignUp = () => {
    setShowModal(true); // Show the modal when the "Sign up" button is clicked
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
    setIncorrectCredentialsModal(false); // Close the incorrect credentials modal
  };

  const handleLogin = () => {
    // Implement the login logic here, e.g., using the email and password from the input fields
    const email = document.getElementById("form1").value;
    const password = document.getElementById("form2").value;

    // Check if the username and password match any user data in the usersData array
    const matchedUser = usersData.find(
      (user) => user.username === email && user.password === password
    );

    if (matchedUser) {
      login(email, password);
    } else {
      // If the credentials are incorrect, show the incorrect credentials modal
      setIncorrectCredentialsModal(true);
    }
  };

  const handleLogout = () => {
    logout(); // Implement the logout logic here
  };

  return (
  <section id="login-section">
    <div className="login-form">
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50 login">
        {user ? ( // If the user is authenticated, show the logout button
          <div>
            <h2>Welcome, {user.username}!</h2>
            <p><b>Name:</b> {user.name}</p>
            <p><b>Phone number:</b> {user.phonenumber}</p>
            <p><b>Email:</b> {user.email}</p>
            <Link to="/home">
            <p><b>Go to Home</b></p>
            </Link>
            <Link to="/me">
            <p><b>Visit My Account</b></p>
            </Link>
            <MDBBtn className="mb-4 w-100 btn-dark" onClick={handleLogout}>
              Logout
            </MDBBtn>
          </div>
        ) : ( // If the user is not authenticated, show the login and registration tabs
          <>
            <MDBTabs pills justify className="mb-3 d-flex flex-row justify-content-between">
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleJustifyClick("tab1")}
                  active={justifyActive === "tab1"}
                  className={justifyActive === "tab1" ? "active-tab" : ""}
                >
                  Login
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleJustifyClick("tab2")}
                  active={justifyActive === "tab2"}
                  className={justifyActive === "tab2" ? "active-tab" : ""}
                >
                  Register
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>
            <MDBTabsContent>
              <MDBTabsPane show={justifyActive === "tab1"}>
                <MDBInput wrapperClass="mb-4 input" label="Username" id="form1" type="username" />
                <MDBInput wrapperClass="mb-4 input" label="Password" id="form2" type="password" />
                <MDBBtn className="mb-4 w-100 btn-dark" onClick={handleLogin}>
                  Sign in
                </MDBBtn>
              </MDBTabsPane>
              <MDBTabsPane show={justifyActive === "tab2"}>
                <MDBInput wrapperClass="mb-4 input" label="Name" id="form3" type="name" />
                <MDBInput wrapperClass="mb-4 input" label="Phone number" id="form3" type="phone" />
                <MDBInput wrapperClass="mb-4 input" label="Email" id="form3" type="email" />
                <MDBBtn className="mb-4 w-100 btn-dark" onClick={handleSignUp}>
                  Sign up
                </MDBBtn>
              </MDBTabsPane>
            </MDBTabsContent>
          </>
        )}

        {/* Modal for displaying the registration message */}
        <MDBModal show={showModal} tabIndex="-1">
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalBody>
                <p>
                  Sorry, it's not possible to register right now.
                  But feel free to log in with the following credentials:
                </p>
                <p><b>Username:</b> Guest</p>
                <p><b>Password:</b> Password</p>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn className="btn-dark" onClick={closeModal}>
                  Close
                </MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>

        {/* Modal for displaying incorrect credentials */}
        <MDBModal show={incorrectCredentialsModal} tabIndex="-1">
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalBody>
                <p>Sorry!</p>
                <p>Incorrect <b>Username</b> or <b>Password</b>.</p>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn className="btn-dark" onClick={closeModal}>
                  Close
                </MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </MDBContainer>
    </div>
  </section>
  );
}

export default Login;
