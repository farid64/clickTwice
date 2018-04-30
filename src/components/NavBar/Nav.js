import React from "react";
import './Nav.css';

const Nav = (props) => (
    <div className="nav">
      <div>
          <a href="./" style={{textDecoration:'none', color: 'white'}}>ClickTwice</a>
      </div>
      <div>{props.message}</div>
      <div>Score is {props.score} | highScore is {props.highScore}</div>
    </div>
);

export default Nav;
