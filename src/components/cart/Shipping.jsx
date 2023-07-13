import React from "react";
import { State } from "country-state-city"; 
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

const Shipping = () => { return (
  <section className="shipping">
    <main>
      <h1>Shipping Details</h1>
      <form>
          <div>
            <label>Street Address</label>
            <input type="text" placeholder="Enter Street address" />
          </div>
          <div>
            <label>Zip Code</label>
            <input type="text" placeholder="Enter Zip Code" />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
            <label>Country</label>
            <select>
                <option value="">Sweden</option>
                {}
            </select>
          </div>
          <div>
            <label>State</label>
            <select>
              <option value="">State</option>
              {State && State.getStatesOfCountry("SE").map((i) => (
              <option option value={i.isoCode} key={i.isoCode}>
              {i.name}
              </option>
              ))}
            </select>
          </div>
          <div>
            <label>Phone Number</label>
            <input type="number" placeholder="Enter Phone Number." />
          </div>
          <div className="d-flex align-items-center justify-content-center" style={{ paddingTop: '20px' }}>
          <a href="/myorders" className="btn btn-danger">
            Checkout
          </a>
          </div>
        </form>
      </main>
    </section>
  );
};
export default Shipping;