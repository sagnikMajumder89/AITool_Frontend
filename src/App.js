import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./components/Users/Register";
import Login from "./components/Users/Login";
import Dashboard from "./components/Users/UserDashboard";
import PrivateNavbar from "./components/Navbar/PrivateNavbar";
import Home from "./components/Home/Home";
import { useAuth } from "./Auth/AuthContext";
import PublicNavbar from "./components/Navbar/PublicNavbar";
import AuthRoute from "./Auth/AuthRoute";
import BlogPostAIAssistant from "./components/contentGeneration/ContentGeneration";
import Plans from "./components/Plans/Plan";
import FreePlanSignup from "./components/Stripe/FreePlanSignup";
import Checkout from "./components/Stripe/Checkout";
import PaymentSuccess from "./components/Stripe/PaymentSuccess";
import ContentGenerationHistory from "./components/contentGeneration/ContentHistory";
import Features from "./components/Features/Features";
import AboutUs from "./components/About/About";

export default function App() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <BrowserRouter>
        {isAuthenticated ? <PrivateNavbar /> : <PublicNavbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <AuthRoute>
                <Dashboard />
              </AuthRoute>
            }
          />
          <Route
            path="/generate-content"
            element={
              <AuthRoute>
                <BlogPostAIAssistant />
              </AuthRoute>
            }
          />
          <Route
            path="/history"
            element={
              <AuthRoute>
                <ContentGenerationHistory />
              </AuthRoute>
            }
          />
          <Route path="/checkout/:plan" element={<Checkout />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/free-plan" element={<FreePlanSignup />} />
          <Route path="/success" element={<PaymentSuccess />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
