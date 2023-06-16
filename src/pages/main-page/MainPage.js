import React from "react";
import MainLayout from "../../components/main-layout/MainLayout";
import HelloText from "./components/HelloText";
import MainInfo from "./components/MainInfo/MainInfo";
import SkillsInfo from "./components/SkillsInfo/SkillsInfo";




export default function MainPage(){

    return(
        <MainLayout>
            <div className="main-page__wrapper">
                <MainInfo/>
                <SkillsInfo/>
            </div>
        </MainLayout>
    );
}