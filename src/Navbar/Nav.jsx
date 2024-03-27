import { Link } from "react-router-dom";
import React from "react";
import "./Nav.css";
import Logo from "../assets/advanture-logo.svg";
import Cart from "../assets/cart.svg";

const Nav = () =>{
    return(
        <>
         <div className="cont-nav">
                <Link to={'/'} className="link"><img src={Logo} className="logo"/></Link>

                <div className="cont-text">
                    <Link to={'/'} className="link">Home</Link>
                    <Link to={'/about'} className="link">About</Link>
                    <Link to={'/shop'} className="link">Shop</Link>
                    <Link to={'/contact'} className="link">Contact</Link>
                    <img src={Cart} alt="cart" />
                </div>
                
        </div>
        </>
       
    )
}

export default Nav;