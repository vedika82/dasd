import React from "react";
import { Component } from "react";
import './Product.css'

const Product = ()=>
{return (
    <>
    <div className="gh">

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
      Venue Room Selection
    </div>
 
 <div>
    <div lassName="image">
        <img  className="image1" src="https://cdn.pixabay.com/photo/2017/03/28/12/06/chairs-2181916_1280.jpg"/>
        <p>Conference Room</p>
        <p>(Capacity:15)</p>
        <p>$1500</p>
        <div>
            <button>-</button>
            <button>+</button>
        </div>
    </div>
        <div className="image">
        <img  className="image1" src="https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_1280.jpg"/>
           <p>Conference Room</p>
        <p>(Capacity:15)</p>
        <p>$1500</p>
        <div>
            <button>-</button>
            <button>+</button>
        </div>
    </div>
        <div className="image">
        <img  className="image1" src="https://cdn.pixabay.com/photo/2015/01/08/18/11/laptops-593296_1280.jpg"/>
           <p>Conference Room</p>
        <p>(Capacity:15)</p>
        <p>$1500</p>
        <div>
            <button>-</button>
            <button>+</button>
        </div>
    </div>
        <div className="image">
        <img className="image1" src="https://cdn.pixabay.com/photo/2019/01/02/07/30/convention-center-3908238_1280.jpg"/>
           <p>Conference Room</p>
        <p>(Capacity:15)</p>
        <p>$1500</p>
        <div>
            <button>-</button>
            <button>+</button>
        </div>
    </div>
        <div className="image">
        <img className="image1" src="https://cdn.pixabay.com/photo/2017/03/28/12/06/chairs-2181916_1280.jpg"/>
           <p>Conference Room</p>
        <p>(Capacity:15)</p>
        <p>$1500</p>
        <div>
            <button>-</button>
            <button>+</button>
        </div>
    </div>
 </div>
</div>
    </>

)

}
export default Product;