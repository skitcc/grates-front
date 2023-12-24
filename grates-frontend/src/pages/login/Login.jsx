import React, { useState, useEffect, useRef } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import shapeAnimation from "../../assets/shapesanimation.riv";
import Rive from "@rive-app/react-canvas";
import "./Login.css";

const Login = () => {
  const emailRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [activeHeading, setActiveHeading] = useState("registration");
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const riveRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data: userData } = await login({ email, password });

      // Check if the mutation was successful
      if (userData) {
        dispatch(setCredentials({ ...userData, email }));
        setEmail("");
        setPassword("");
        navigate("/main");
      } else {
        // Handle the case where the mutation did not return valid data
        setErrMsg("Login Failed");
        errRef.current.focus();
      }
    } catch (err) {
      if (!err?.originalStatus) {
        setErrMsg("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };
  const switchHeading = (heading) => {
    setActiveHeading(heading);
  };
  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div
      className="background-container"
      style={{ height: "100vh", width: "100%" }}
    >
      {/* <BackgroundAnimation /> */}
      <Rive src={shapeAnimation} riveRef={riveRef} />
      <div className="name-container">
        <h1 style={{ fontFamily: "Comfortaa" }}>Grates</h1>
      </div>

      <div className="form-container">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          // aria-live="assertive"
        >
          {errMsg}
        </p>
        <div className="switch-container">
          <h2
            className={`left-heading ${
              activeHeading === "registration" ? "active" : ""
            }`}
            onClick={() => switchHeading("registration")}
          >
            Sign Up
          </h2>
          <h2
            className={`right-heading ${
              activeHeading === "login" ? "active" : ""
            }`}
            onClick={() => switchHeading("login")}
          >
            Sign In
          </h2>
        </div>
        <form
          style={{
            flexDirection: "column",
            display: "flex",
            // border: "5px solid white",
            padding: "30px",
            borderRadius: "30px",
            position: "relative",
            zIndex: "1",
          }}
        >
          <label style={{ marginBottom: "7px" }}>
            <TextField
              className="text-input-field"
              style={{ width: "100%", position: "relative", zIndex: "12" }}
              label="Email:"
              id="email"
              ref={emailRef}
              size="small"
              InputProps={{
                className: "text-field-input",
              }}
              onChange={(e) => handleEmailChange(e)}
              defaultValue={email}
            />
          </label>
          <label style={{ marginBottom: "7px" }}>
            <TextField
              className="text-input-field"
              style={{ width: "100%" }}
              label="Password:"
              id="password"
              size="small"
              InputProps={{
                className: "text-field-input",
              }}
              onChange={(e) => handlePasswordChange(e)}
              defaultValue={password}
            />
          </label>
          <h6 style={{ marginLeft: "160px", color: "#26005B" }}>
            Забыли пароль?
          </h6>
          <Button
            variant="outlined"
            style={{ fontFamily: "Comfortaa", fontWeight: "bold" }}
            onClick={(e) => handleSubmit(e)}
          >
            Log in
          </Button>
        </form>
      </div>
    </div>
  );
  return content;
};

export default Login;
