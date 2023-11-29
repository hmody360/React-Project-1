import React from "react";
import ReactLogo from "../images/React-icon.svg.png"

const Header = () => {
    return (
        <div className="header-container">
            <img src={ReactLogo} className="react-logo" />
            <h3 className="react-facts">React Facts</h3>
            <h4 className="react-course">React Course - Project 1</h4>
        </div>
    )
}

export default Header