import React from "react";
import {NavLink} from "react-router-dom";
import myimg from "../../utils/assets/logo/logoNew.png";
import "../../Header.css";
const Header = () => {
    return (
        <div className="head">
 <NavLink to="/">
            <img src={myimg} alt="logo"/>
           
        </NavLink>
        <div className="navbar">
             <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/Products">Products</NavLink></li>
            </ul>
        </div>

      
        </div>

       
         
        

    );
};

export default Header;
