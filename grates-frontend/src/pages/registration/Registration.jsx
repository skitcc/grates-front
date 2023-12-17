import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    console.log("wdwdw");
    e.preventDefault();
    try {
      await fetch("http://mgtu.tech/auth/sign-up", {
        method: "POST",
        body: JSON.stringify({
          name: username,
          email: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => console.log(res));
    } catch (e) {
      console.log(e);
    }
  };
  console.log();

  return (
    <div
      style={{
        background:
          "linear-gradient(315deg, rgba(2,0,36,1) 0%, rgba(161,34,180,1) 35%, rgba(0,212,255,1) 100%)",
        height: "100vh",
        width: "250vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "400px",
        }}
      >
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
            <Typography
              variant="h4"
              style={{ marginBottom: "20px", color: "rgb(2,0,36)" }}
            >
              Регистрация
            </Typography>
            <TextField
              label="Имя пользователя:"
              id="outlined-size-small"
              size="small"
              onChange={(e) => handleUsernameChange(e)}
              defaultValue={username}
            />
          </label>
          <label style={{ marginBottom: "20px" }}>
            <TextField
              label="Email:"
              id="outlined-size"
              size="small"
              onChange={(e) => handleEmailChange(e)}
              defaultValue={email}
            />
          </label>
          <label style={{ marginBottom: "20px" }}>
            <TextField
              label="Пароль:"
              id="outlined"
              size="small"
              onChange={(e) => handlePasswordChange(e)}
              defaultValue={password}
            />
          </label>
          <Button variant="outlined" onClick={(e) => handleSubmit(e)}>
            Продолжить
          </Button>
          {/* <button>www</button> */}
        </form>
      </div>
    </div>
  );
};
export default Registration;
