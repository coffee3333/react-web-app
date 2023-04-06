import React from "react";
import MainLayout from "../../components/main-layout/MainLayout";
import HelloText from "./components/HelloText";




export default function MainPage(){

    return(
        <MainLayout>
            <div className="main-page__wrapper">
                <HelloText/>
                

            </div>
        </MainLayout>
    );
}