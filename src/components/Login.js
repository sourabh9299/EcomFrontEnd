import React, { useEffect } from "react";
import { useState } from "react";
// import auth from '../components/nav/Nav'
import { useNavigate } from 'react-router-dom';

import './Signup.css'

const Login = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const auth = localStorage.getItem('user')
    const navigate = useNavigate();
    useEffect(() => {
        if (auth) navigate('/');
    })
    async function loginHandler() {
        let result = await fetch('http://localhost:5000/user/login', {
            method: 'post',
            body: JSON.stringify({ Email, Password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result)
        if (result) {
            // console.log(Loginuser);
            localStorage.setItem('user', JSON.stringify(result));
            
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