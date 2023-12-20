import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider } from "./Auth/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
const stripePromise = loadStripe(
  "pk_test_51ONsukSIOXSYj3tEEHHPKYwSwyHrjyjcarzqARlUXM0BIFSGwnZxtNbXlCnLy6KMehWjXCktt17IDmPB9n235kOJ001sYG3H0w"
);
const options = {
  mode: "payment",
  currency: "inr",
  amount: 1000000,
};
//React Query Client
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Elements stripe={stripePromise} options={options}>
          <App />
        </Elements>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
