import React, { useState } from "react";
import NavbarResponsive from "../../components/NavbarResponsive/NavbarResponsive";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Programs from "../../components/Programs/Programs";
import { programs_shopper } from "../../constants/programs_shopper";
import TeamDisplay from "./TeamDisplay";

const Team = () => {
  const [hamActive, setHamActive] = useState(false);

  return (
    <div className="App">
      <Navbar hamActive={hamActive} setHamActive={setHamActive} />
      <NavbarResponsive hamActive={hamActive} />
      <Hero
        desc={
          "The ACM Student Chapter member team consists of diverse set of talents with people from having communication skills, programming skills,etc to the people who can manage finances, handle people. The selection of the Chapter Team is made by the Head of Department and Chapter Mentor through interviews."
        }
        title={"Our Team & their Contributions"}
      />
      {/* <Footer /> */}
      <TeamDisplay />
      <Programs programs={programs_shopper} />
    </div>
  );
};

export default Team;
