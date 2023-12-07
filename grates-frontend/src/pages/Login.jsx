import React, { useState } from 'react';
import { Button, TextField } from "@mui/material";
const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const saveToken = (token) => {
        localStorage.setItem("token", JSON.stringify(token))
    }


    const handleEmailChange = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        await fetch("http://mgtu.tech/auth/sign-in", {
            method:"POST",
            body: JSON.stringify({email:email, password: password}),
            headers: {
                "Accept":"application/json",
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            if (res.status === 200){
                const tokenData = res.json()
                console.log(JSON.stringify(tokenData));
                saveToken(JSON.stringify(tokenData))
                return Promise.resolve()
            }
            return Promise.reject()
        })
    }
    return (
        <div style={{background: "linear-gradient(315deg, rgba(2,0,36,1) 0%, rgba(161,34,180,1) 35%, rgba(0,212,255,1) 100%)",height:"100vh", width:"250vh"}}>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"400px"}}>
            <form style={{flexDirection:"column", display:"flex", border:"5px solid white", padding:"30px", borderRadius:"30px"}}>
              <label style={{marginBottom:"20px"}}>
                <TextField
                  label="Email:"
                  id="outlined-size"
                  size="small"
                  onChange={(e) => handleEmailChange(e)}
                  defaultValue={email}
                />
              </label>
              <label style={{marginBottom:"20px"}}>
                  <TextField
                      label="Пароль:"
                      id="outlined"
                      size="small"
                      onChange={(e) => handlePasswordChange(e)}
                      defaultValue={password}
                    />
              </label>
              <Button variant="outlined" onClick={(e) => handleSubmit(e)}>РЫГНУТЬСЯ</Button>
              {/* <button>www</button> */}
            </form>
          </div>
        </div>
      );
};

export default Login;