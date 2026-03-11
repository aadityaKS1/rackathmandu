import React from "react";
import TeamHero from "../components/team/TeamHero";
import ExecutiveBoard from "../components/team/ExecutiveBoard";
import Committees from "../components/team/Committees";

const Team = () => {
  return (
    <>
      <TeamHero />
      <ExecutiveBoard />
      <Committees />
    </>
  );
};

export default Team;