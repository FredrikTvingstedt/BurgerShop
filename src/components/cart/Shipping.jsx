import React, { useState } from "react";
import { State } from "country-state-city";
import { useShippingDetails } from "../../context/ShippingDetailsContext";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const { updateShippingDetails } = useShippingDetails();
  const { cartItems } = useShoppingCart();
  const [streetAddress, setStreetAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation checks
    if (
      streetAddress.length < 5 ||
      zipCode.trim() === "" ||
      city.trim() === "" ||
      phoneNumber.length < 5
    ) {
      return; // Exit the function if validation fails
    }

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
    navigate("/myorders", {
      state: {
        shippingDetails: {
          streetAddress,
          zipCode,
          city,
          country,
          state,
          phoneNumber,
        },
        cartItems,
      },
    });
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
            {streetAddress.length < 5 && (
              <p className="error">Street address needs to be at least 5 characters long.</p>
            )}
          </div>
          <div>
            <label>Zip Code</label>
            <input
              type="text"
              placeholder="Enter Zip Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
            {zipCode.trim() === "" && (
              <p className="error">Zip Code is required.</p>
            )}
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              placeholder="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            {city.trim() === "" && (
              <p className="error">City is required.</p>
            )}
          </div>
          <div>
            <label>Country</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Sweden</option>
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
            {phoneNumber.length < 5 && (
              <p className="error">Phone Number needs to be at least 8 digits long.</p>
            )}
          </div>
          <div className="d-flex align-items-center justify-content-center" style={{ paddingTop: '20px' }}>
            <button
              type="submit"
              className="btn btn-danger"
              style={{ backgroundColor: 'rgb(156, 0, 60)' }}
              disabled={
                streetAddress.length < 5 ||
                zipCode.trim() === "" ||
                city.trim() === "" ||
                phoneNumber.length < 5
              }
            >
              Checkout
            </button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
