import React from "react";
import { Link, useNavigate } from "react-router-dom";


const Nav = () => {

    const naviagte = useNavigate();
    const auth = localStorage.getItem('user')
    function logout() {
        localStorage.clear();
        naviagte('/signup');
    }
    return (
        <div className="Router-li">
            <ul>
                <li> <Link to="/">Product </Link></li>
                <li> <Link to="/addProducts">Add Products</Link></li>
                <li> <Link to="/Update">Update Products</Link></li>
                <li>{auth ? <Link onClick={logout} to="/Signup">Logout</Link> : <Link to="/Signup"> Signup </Link>}   </li>
                <li><Link to="/login"  > Login </Link></li>
            </ul>
        </div>
    )
};


export default Nav;