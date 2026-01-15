import React from 'react';
import { Component } from 'react';
import './Landing.css';
// import Product from './Components/Product';

const Landing = () => {
  return (
    <>
    <div className='container'>
    <div className='conference-expense' >
      <h2 style={{ fontSize: '1.8rem' }}>Conference Expense Planner </h2>
      {/* <h2 style={{ fontSize: '2rem', marginTop: '0px' }}>Planner </h2> */}
      <p>Plan your next major event with us!</p>
      <a href='/Product.jsx' className='btn-link'>
      <button className='get-started-button' >Get Started</button>
      </a>
    </div>

    <div className='info-section'>
      <div className='section'>
        Welcome to BugetEase Solutions,your trusted partner 
        in simplifying budget management and financial solutions,
         At BudgetEase, we understand the importance of effective planning and strive to 
         provide intuitive, user-friendly solutions to meet the diverse needs
         of our clients.
      </div>
      <div className='section'>
        With a commitment to efficiency and innovation, we empower 
        individuals and business to take control of their finances and achieve 
        their goals with ease.
      </div>
      <div className='section'>
        At BudgetEase Solutions, our mission is to make budgeting effortless 
        and accessible for everyone. Whether you're a small business owner, a 
        busy proffesional, or an individual looking to manage your personal finances,
        we offer tailored solutions to streamline your budgeting process.
      </div>
    </div>

    </div>
</>
  );
};

export default Landing;