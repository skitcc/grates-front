import { Button, TextField } from "@mui/material";
import React from "react"
import { useState } from "react";
const Registration = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // отправка данных на сервер
    };
  
    return (
      <div style={{background: "linear-gradient(315deg, rgba(2,0,36,1) 0%, rgba(161,34,180,1) 35%, rgba(0,212,255,1) 100%)",height:"100vh", width:"250vh"}}>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"400px"}}>
          <form onSubmit={handleSubmit} style={{flexDirection:"column", display:"flex", border:"5px solid white", padding:"30px", borderRadius:"30px"}}>
            <label style={{marginBottom:"20px"}}>
      
              <TextField
                label="Имя пользователя:"
                id="outlined-size-small"
                size="small"
                onChange={() => handleUsernameChange}
                value={username}
              />

            </label>
            <label style={{marginBottom:"20px"}}>
              <TextField
                label="Email:"
                id="outlined-size-small"
                size="small"
                onChange={() => handleEmailChange}
                value={email}
              />
            </label>
            <label style={{marginBottom:"20px"}}>
                <TextField
                    label="Пароль:"
                    id="outlined-size-small"
                    size="small"
                    onChange={() => handlePasswordChange}
                    value={password}
                  />
            </label>
            <Button variant="outlined">РЫГНУТЬСЯ</Button>
          </form>
        </div>
      </div>
    );
  };
export default Registration