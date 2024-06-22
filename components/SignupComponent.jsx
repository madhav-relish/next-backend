"use client";
import React, { useState } from "react";
import LabelInput from "./LabelInput";
import axios from "axios";

const SignupComponent = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const handleSignup = async () => {
    try {
      const response = axios.post("http://localhost:3000/api/user", {
        username: userDetails.username,
        password: userDetails.password,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error While signing up", error);
    }
  };

  return (
    <div>
      <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
          >
            <div>
              <div className="px-10">
                <div className="text-3xl font-extrabold">Sign up</div>
              </div>
              <div className="pt-2">
                <LabelInput
                  value={userDetails.username}
                  label="Username"
                  type="email"
                  placeholder="madhavsingh@gmail.com"
                  handleChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      username: e.target.value,
                    });
                  }}
                />
                <LabelInput
                  value={userDetails.password}
                  label="Password"
                  type="password"
                  placeholder="random@123"
                  handleChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      password: e.target.value,
                    });
                  }}
                />
                <button
                  onClick={handleSignup}
                  type="button"
                  className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                  Sign in
                </button>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
