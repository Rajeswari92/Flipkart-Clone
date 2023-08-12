import React, { useState } from "react";
import "./LoginModal.css";
import { RxCross2 } from "react-icons/rx";
import supabase from "../../supabase";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/userSlices";
const LoginModal = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginType, setLoginType] = useState(true);
  const dispatch = useDispatch();
  const signup = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (data.user) {
      alert("Account created. Please verify your email. ");
    }
    console.log(data, error);
  };

  const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert(error?.message);
      return;
    }
    dispatch(setUser(data.user));
  };
  return isOpen ? (
    <div className="overlay">
      <div className="LoginModal">
        <div className="left">
          <div className="left-container">
            <p className="Login-tittle">Login</p>
            <p className="Login-des">
              Get access to your Orders, Wishlist and Recommendations
            </p>
          </div>
        </div>
        <div className="right">
          <input
            type="text"
            className="Login-input"
            placeholder="Enter email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="Login-input"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="termsandcon">
            By continuing, you agree to Flipkart's{" "}
            <span style={{ color: "blue" }}>Terms to Use</span> and
            <span style={{ color: "blue" }}>Privacy Policy.</span>
          </p>
          {loginType ? (
            <button className="Login-btn" onClick={login}>
              Login
            </button>
          ) : (
            <button className="Login-btn" onClick={signup}>
              Signup
            </button>
          )} 
          
          {loginType ? (
            <p className="login-signup" onClick={() => setLoginType(false)}>
              New to Flipkart? Create an account
            </p>
          ) : (
            <p className="login-signup" onClick={() => setLoginType(true)}>
              Already an User? Login to an account
            </p>
          )}
        </div>
        <div className="close" onClick={() => setIsOpen(false)}>
          <RxCross2 />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default LoginModal;
