import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import './Signup.css'

const Login = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();
    async function loginHandler() {
        let Loginuser = await fetch('http://localhost:5000/user/login', {
            method: 'post',
            body: JSON.stringify({ Email, Password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        Loginuser = await Loginuser.json();
        if (Loginuser.Email) {

            console.log(Loginuser);
            localStorage.setItem('loginuser', JSON.stringify(Loginuser));
            navigate('/');
        } else {
            alert("In valid user");
        }
    }

    return (
        <div className="Signup">
            <h1>Login</h1>
            <form action="">
                <input type="text" value={Email} placeholder="Email"
                    onChange={(e) => { setEmail(e.target.value) }}
                />

                <input type="password" value={Password} placeholder="Password"
                    onChange={(e) => { setPassword(e.target.value) }}
                />

                <button type="button" onClick={loginHandler}>
                    Login
                </button>

            </form>
        </div>
)}
export default Login;