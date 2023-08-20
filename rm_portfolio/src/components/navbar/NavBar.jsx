import React from "react";
import "./navbar.css";
import NavComp from "../navcomp/NavComp";
import { Link } from "react-router-dom";

const NavBar = () => {
    const navComponents = (
        <React.Fragment>
            <Link to="/">
                <NavComp name="Menu" />
            </Link>
            <NavComp name="RMADAMBA" />
        </React.Fragment>
    );
    return <div className="rm__navbar">{navComponents}</div>;
};

export default NavBar;
