import React, { Component } from "react";
//import logo from '../images/logo.png'
//import {FaAlignRight} from 'react-icons/fa'
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../fonts/fgz1zsc.css";
// import 'https://use.typekit.net/fgz1zsc.css'

export default class Navbar extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-logo">
          <svg
            width="92"
            height="48"
            viewBox="0 0 92 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="28" r="8" fill="#F7A4A4" />
            <circle cx="81" cy="19" r="11" fill="#EE3E30" />
            <circle cx="41" cy="13" r="13" fill="#FFC724" />
            <circle cx="58" cy="42" r="6" fill="#BBA5E1" />
            <line
              x1="55.1213"
              y1="15.5149"
              x2="71.1213"
              y2="19.5149"
              stroke="black"
              stroke-opacity="0.4"
            />
            <line
              x1="45.3841"
              y1="25.6799"
              x2="55.3841"
              y2="37.6799"
              stroke="#898989"
            />
            <line
              x1="29.3391"
              y1="12.3674"
              x2="16.3391"
              y2="24.3674"
              stroke="black"
              stroke-opacity="0.47"
            />
          </svg>
          <span class="header-letter">
            <Link to="./">首页</Link>
          </span>
        </div>
        <nav>
          <ul className="menu">
            <li className="menu-item">
              <Link to="./introduce">introduce</Link>
            </li>
            <li className="menu-item">
              <Link to="/knowledge">knowledge</Link>
            </li>
            <li className="menu-item">
              <Link to="/robot">robot</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
