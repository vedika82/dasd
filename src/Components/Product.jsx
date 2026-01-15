import React from "react";
import { Component } from "react";
import './Product.css'

const Product = ()=>
{return (
    <>
    <div className="top-bar">
       
       {/* <div> */}
        <nav className="links">
            <a href="">Conference Expense Planner</a>
            <a href="Venue.jsx">Venue</a>
            <a href="Add-ons.jsx">Add-ons</a>
            <a href="Meals.jsx">Meals</a>
            <a href='/Product.jsx' className='btn-link'>
            <button className="show-details-button">ShowDetails</button></a>
        </nav>
        {/* </div> */}
    </div>
    <div className="snd-bar">
        <p>Venue Room Selection</p>
    </div>

    </>

)

}
export default Product;