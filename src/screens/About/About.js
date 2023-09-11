import React, { useState } from "react";
import NavbarResponsive from "../../components/NavbarResponsive/NavbarResponsive";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Growth from "../../components/Growth/Growth";
import Programs from "../../components/Programs/Programs";
import { programs_shopper } from "../../constants/programs_shopper";
import Benifits from "../../components/Membershipbenifits/Benefits";
const About = () => {
  const [hamActive, setHamActive] = useState(false);

  return (
    <div className="App">
      <Navbar hamActive={hamActive} setHamActive={setHamActive} />
      <NavbarResponsive hamActive={hamActive} />
      <Hero
        title={`About Us`}
        desc="        The ACM student chapter at Pune Vidyarthi Griha’s College of Engineering
        & Technology is dedicated to fostering a community of students
        interested in computer science and technology. Our mission is to provide
        opportunities for professional development, networking, and hands-on
        learning through events, workshops, and community outreach initiatives.
        Join us to stay connected with the latest trends and advancements in the
        field and grow your knowledge and skills alongside a supportive
        community of like-minded individuals."
      />
      <br />
      <br />
      <h2 align="center"> Acheivements will be listed here shortly......</h2>
      <br />
      <br />
      <br />
      <br />
      <Programs programs={programs_shopper} />
    </div>
  );
};

export default About;
