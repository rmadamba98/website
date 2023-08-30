import React from "react";
import "./navbar.css";
import NavComp from "../navcomp/NavComp";

const NavBar = () => {
    const navComponents = (
        <React.Fragment>
            <NavComp name="RMADAMBA" />
        </React.Fragment>
    );
    return <div className="rm__navbar">{navComponents}</div>;
};

export default NavBar;
