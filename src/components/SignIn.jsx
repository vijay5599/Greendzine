import React, { useState } from "react";
import logo1 from "../assets/Group 3@2x.png";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    let isValid = true;
    const updatedErrors = { email: "", password: "" };

    // Email validation
    if (!formData.email) {
      updatedErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      updatedErrors.email = "Invalid email format";
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      updatedErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      updatedErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(updatedErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      if (
        formData.email === "vbvijay@gmail.com" &&
        formData.password === "vijay@123"
      ) {
        navigate("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <div className="flex flex-col m-0 mx-auto mt-28 text-center p-8 items-center min-h-screen">
      <img src={logo1} alt="logo" className="h-24 w-24" />
      <p className="text-green-900">We are Electric</p>
      <form className="my-7" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          required
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          className={`w-60 my-3 p-3 rounded-full bg-[#242424] shadow-inner shadow-gray-700 outline-none ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && (
          <div className="text-red-500 text-sm">{errors.email}</div>
        )}
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className={`w-60 my-3 p-3 rounded-full bg-[#242424] shadow-inner shadow-gray-700 outline-none ${
            errors.password ? "border-red-500" : ""
          }`}
        />
        {errors.password && (
          <div className="text-red-500 text-sm">{errors.password}</div>
        )}
        <button
          type="submit"
          className="w-60 my-3 p-3 rounded-full outline-none text-green-400 bg-gradient-to-b from-green-700 via-green-700 to-black border-none"
        >
          Login
        </button>
      </form>
      <p className="text-green-800 text-md font-semibold">Forgot Password?</p>
    </div>
  );
}

export default SignIn;
