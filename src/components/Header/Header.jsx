// Import necessary React libraries
import React from 'react';
import './Header.css';

// Define the main Header component
const Header = () => {
  return (
    <header className="header">
      <div className="left-side">
        <a href="/">Career Courier</a>
        <a href="/industries">Industries</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="right-side">
        <input type="text" placeholder="Search" className="search-bar" />
        <img
        //   src="user-avatar.jpg" // Replace with the actual path to your user avatar image
          alt="User Avatar"
          className="avatar"
        />
      </div>
    </header>
  );
};

export default Header;
