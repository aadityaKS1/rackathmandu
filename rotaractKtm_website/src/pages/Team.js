import React from "react";
import TeamHero from "../components/team/TeamHero";
import ExecutiveBoard from "../components/team/ExecutiveBoard";
import Committees from "../components/team/Committees";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Team = () => {
    return (
        <>
            <Navbar />
            <TeamHero />
            <ExecutiveBoard />
            <Committees />
            <Footer />
        </>
    );
};

export default Team;