import { useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Signup = () => {
    
    const navigate = useNavigate();
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    useEffect(() => {
        const auth = localStorage.getItem('user')
        if (auth){
            navigate('/')
        }
    })

    async function dataHandler() {
        let user = await fetch('https://myecom.onrender.com/user/register', {
            method: 'post',
            body: JSON.stringify({ Name, Email, Password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        user = await user.json();
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/');

    }

    return (
        <>
            <div className='Signup'>
                <h1>Register</h1>
                <form action="">

                    <input type="text" value={Name} placeholder='Enter Name'
                        onChange={(e) => { setName(e.target.value); }}
                    />

                    <input type="email" value={Email} placeholder='Enter email'
                        onChange={(e) => { setEmail(e.target.value); }}
                    />

                    <input type="Password" value={Password} placeholder=' Password'
                        onChange={(e) => { setPassword(e.target.value); }}
                    />
                    <button type="button" onClick={dataHandler}>
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default Signup;