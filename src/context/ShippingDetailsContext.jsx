import { createContext, useContext, useState } from "react";

const ShippingDetailsContext = createContext({
  shippingDetails: {},
  updateShippingDetails: () => {},
});

export function useShippingDetails() {
  return useContext(ShippingDetailsContext);
}

export function ShippingDetailsProvider({ children }) {
  const [shippingDetails, setShippingDetails] = useState({});

  const updateShippingDetails = (details) => {
    setShippingDetails(details);
  };

  return (
    <ShippingDetailsContext.Provider
      value={{ shippingDetails, updateShippingDetails }}
    >
      {children}
    </ShippingDetailsContext.Provider>
  );
}
