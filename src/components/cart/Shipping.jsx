import React, { useState } from "react";
import { State } from "country-state-city";
import { useShippingDetails } from "../../context/ShippingDetailsContext";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useNavigate } from "react-router-dom";  // Updated import

const Shipping = () => {
  const { updateShippingDetails } = useShippingDetails();
  const { cartItems } = useShoppingCart();
  const [streetAddress, setStreetAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();  // Updated hook

  const handleSubmit = (event) => {
    event.preventDefault();

    // Update the shipping details
    updateShippingDetails({
      streetAddress,
      zipCode,
      city,
      country,
      state,
      phoneNumber,
    });

    // Perform further actions (e.g., redirect to another page)
    // Redirect to /myorders and pass the shipping details and cart details
    navigate("/myorders", { state: { shippingDetails: { streetAddress, zipCode, city, country, state, phoneNumber }, cartItems } });  // Updated navigation code
  };

  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Street Address</label>
            <input
              type="text"
              placeholder="Enter Street address"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
            />
          </div>
          <div>
            <label>Zip Code</label>
            <input
              type="text"
              placeholder="Enter Zip Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              placeholder="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <label>Country</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Sweden</option>
              {/* Add more country options if needed */}
            </select>
          </div>
          <div>
            <label>State</label>
            <select value={state} onChange={(e) => setState(e.target.value)}>
              <option value="">State</option>
              {State && State.getStatesOfCountry("SE").map((i) => (
                <option value={i.isoCode} key={i.isoCode}>
                  {i.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Phone Number</label>
            <input
              type="number"
              placeholder="Enter Phone Number."
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="d-flex align-items-center justify-content-center" style={{ paddingTop: '20px' }}>
            <button type="submit" className="btn btn-danger">
              Checkout
            </button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
