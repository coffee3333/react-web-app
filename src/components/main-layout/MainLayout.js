import React from "react";
import NavBar from "../nav-bar/NavBar";


export default function MainLayout ({children}){
    return(
        <div>
            <NavBar/>
            <div className="main-layout__wrapper">
                {children}
            </div>
        </div>
    );
}