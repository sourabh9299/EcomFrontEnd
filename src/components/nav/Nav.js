import React from "react";
import { Link, useNavigate } from "react-router-dom";


const Nav = () => {

    const naviagte = useNavigate();
    const auth = localStorage.getItem('user')
    console.log(auth)
    function logout() {
        localStorage.clear();
        naviagte('/signup');
    }
    return (
        <div className="Router-li">
            {
                auth ? <div>
                    <ul>
                    <li> <Link to="/">Product </Link></li>
                    <li> <Link to="/addProduct">Add Products</Link></li>
                        <li>  <Link onClick={logout} to="/Login"> Logout ({JSON.parse(auth).Name})  </Link></li>
                    </ul>
                </div>
                    :
                    <ul className="right-text">
                        <li> <Link to="/Login">Login</Link></li>
                        <li> <Link to="/signup">signup</Link></li>

                    </ul>
            }

        </div>
    )
};


export default Nav;