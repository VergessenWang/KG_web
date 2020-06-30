import "./Footer.css";
import React, { Component } from "react";
//import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <span class="footer-letter">
          <a href="https://github.com/bvanjoi/KG">查看Github源码了解更多</a>
        </span>
      </div>
    );
  }
}
