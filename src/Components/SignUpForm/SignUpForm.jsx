import React from "react";
import './SignUpForm.css';
import { FaLock, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';



const SignUpForm = () => {
    useEffect(() => {
        document.title = 'Sign-Up | Nabiel'; 
      }, []); 
    const handleSignupClick = () => {
        return <Link to="/login">Login</Link>;
         }
    return (
        <div className="wrapper">
            <form action="">
                <h1>Sign Up</h1>
                <div className="input-box">
                    <input type="text" placeholder="Email" required />
                    <FaUser className = 'icon'/ >
                </div>
                <div className="input-box">
                    <input type= "password" placeholder="Password" required />
                    <FaLock className ='icon'/>
                </div>
                <div className="input-box">
                    <input type= "number" placeholder="OTP" required />
                    <FaLock className ='icon'/>
                </div>
                <div className="remember-forgot">
                    <label> <input type="checkbox"/>Remember me </label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit">Register</button>
                <div className="register-link">
                    <p>Have an account? {handleSignupClick()}</p>
                </div>
            </form>
        </div>
    )
}
export default SignUpForm;