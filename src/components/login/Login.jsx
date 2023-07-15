import React, { useState } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

function Login() {
  const [justifyActive, setJustifyActive] = useState("tab1");
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility

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
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs
        pills
        justify
        className="mb-3 d-flex flex-row justify-content-between"
      >
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab2")}
            active={justifyActive === "tab2"}
          >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}>
          <MDBInput wrapperClass="mb-4" label="Email address" id="form1" type="email" />
          <MDBInput wrapperClass="mb-4" label="Password" id="form2" type="password" />
          <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
        </MDBTabsPane>
        <MDBTabsPane show={justifyActive === "tab2"}>
          <MDBInput wrapperClass="mb-4" label="Name" id="form1" type="text" />
          <MDBInput wrapperClass="mb-4" label="Street address" id="form1" type="text" />
          <MDBInput wrapperClass="mb-4" label="Zipcode" id="form1" type="text" />
          <MDBInput wrapperClass="mb-4" label="City" id="form1" type="text" />
          <MDBInput wrapperClass="mb-4" label="Phone number" id="form1" type="phone" />
          <MDBInput wrapperClass="mb-4" label="Email" id="form1" type="email" />
          <MDBInput wrapperClass="mb-4" label="Password" id="form1" type="password" />
          <div className="d-flex justify-content-center mb-4">
            <MDBCheckbox name="flexCheck" id="flexCheckDefault" label="I have read and agree to the terms" />
          </div>
          <MDBBtn className="mb-4 w-100" onClick={handleSignUp}>
            Sign up
          </MDBBtn>
        </MDBTabsPane>
      </MDBTabsContent>

      {/* Modal for displaying the registration message */}
      <MDBModal show={showModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalBody>
              <p>
                Sorry, it's not possible to register right now. 
                But feel free to log in with the following credentials:
              </p>
              <p>Username: Guest</p>
              <p>Password: Password</p>
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
