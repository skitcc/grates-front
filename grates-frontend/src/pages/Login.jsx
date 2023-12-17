import React, { useState, useEffect, useRef } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";
import { useLoginMutation } from "../features/auth/authApiSlice";
import BackgroundAnimation from "../components/BackGround";

const Login = () => {
  const emailRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

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
      const userData = await login({ email, password })
      dispatch(setCredentials({ ...userData, email }));
      setEmail("");
      setPassword("");
      navigate("/main");
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
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

  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div style={{ position: "relative", height: "100vh", width: "100%" }}>
      <BackgroundAnimation />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <form
          style={{
            flexDirection: "column",
            display: "flex",
            border: "5px solid white",
            padding: "30px",
            borderRadius: "30px",
          }}
        >
          <label style={{ marginBottom: "20px" }}>
            <TextField
              label="Email:"
              id="email"
              ref={emailRef}
              size="small"
              onChange={(e) => handleEmailChange(e)}
              defaultValue={email}
            />
          </label>
          <label style={{ marginBottom: "20px" }}>
            <TextField
              label="Пароль:"
              id="password"
              size="small"
              onChange={(e) => handlePasswordChange(e)}
              defaultValue={password}
            />
          </label>
          <Button variant="outlined" onClick={(e) => handleSubmit(e)}>
            Продолжить
          </Button>
        </form>
      </div>
    </div>
  );
  return content;
};

export default Login;
