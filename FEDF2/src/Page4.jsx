import React, { Component } from 'react';
import './css/Page4.css';

export default class Page4 extends Component {
  menuClick(){
    const navList = document.getElementById("navlist");
    if (navList.style.display === "block") {
      navList.style.display = "none";
    } else {
      navList.style.display = "block";
  }
};

  render() {
    return (
      <div>
        <header>
          <nav>
            <div className='logo'>My Website</div>
            <ul id="navlist">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Services</li>
              <li>Blog</li>
            </ul>
            {/* Fix onClick handler */}
            <div className='menu' onClick={this.menuClick}>&#9776;</div>
          </nav>
        </header>

        <section>
          <h1>Welcome to RESPONSIVE WEBPAGE!!!</h1>
          <p>This is a simple responsive webpage which can adapt to any screen size.</p>
        </section>

        <footer>
          Copyright © 2025. All rights reserved.
        </footer>
      </div>
    );
  }
}