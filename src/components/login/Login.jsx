import React, { useState } from "react";
import { MDBContainer, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBBtn, MDBInput, MDBModal, MDBModalDialog, MDBModalContent, MDBModalBody, MDBModalFooter } from "mdb-react-ui-kit";
import { useAuth } from "../../context/AuthContext";

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

    // Check if the username and password are correct
    // For the sake of this example, let's assume the correct username and password are "Guest" and "Password"
    if (email === "Guest" && password === "Password") {
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
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50 login">
      {user ? ( // If the user is authenticated, show the logout button
        <div>
          <h2>Welcome, {user.name}!</h2>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Phonenumber:</b> {user.phonenumber}</p>
          <MDBBtn className="mb-4 w-100" onClick={handleLogout}>
            Logout
          </MDBBtn>
        </div>
      ) : ( // If the user is not authenticated, show the login and registration tabs
        <>
          <MDBTabs pills justify className="mb-3 d-flex flex-row justify-content-between">
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleJustifyClick("tab1")} active={justifyActive === "tab1"}>
                Login
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleJustifyClick("tab2")} active={justifyActive === "tab2"}>
                Register
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
          <MDBTabsContent>
            <MDBTabsPane show={justifyActive === "tab1"}>
              <MDBInput wrapperClass="mb-4" label="Username" id="form1" type="username" />
              <MDBInput wrapperClass="mb-4" label="Password" id="form2" type="password" />
              <MDBBtn className="mb-4 w-100" onClick={handleLogin}>
                Sign in
              </MDBBtn>
            </MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab2"}>
              {/* Your registration form input fields here */}
              <MDBBtn className="mb-4 w-100" onClick={handleSignUp}>
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
              <MDBBtn color="secondary" onClick={closeModal}>
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
              <MDBBtn color="secondary" onClick={closeModal}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </MDBContainer>
  );
}

export default Login;
