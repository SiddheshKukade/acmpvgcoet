import React, { useState } from "react";
import NavbarResponsive from "../../components/NavbarResponsive/NavbarResponsive";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Programs from "../../components/Programs/Programs";
import { programs_shopper } from "../../constants/programs_shopper";
import Benifits from "../../components/Membershipbenifits/Benefits";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

const Why = () => {
  const [hamActive, setHamActive] = useState(false);
  const points = [
    "Access to ACM's extensive digital library and resources, including technical journals, magazines, and conference proceedings.",
    "Opportunities to network with industry professionals, faculty members, and other students through events, seminars, and workshops.",
    "Exposure to cutting-edge research and developments in the field through guest speakers and events.",
    "Opportunities to participate in programming contests, hackathons, and other tech-related competitions.",
    "Access to scholarship and funding opportunities.",
    "Opportunities to develop leadership skills through involvement in chapter activities and events.",
    "Access to mentorship and career guidance from faculty members and industry professionals.",
  ];
  return (
    <div className="App">
      <Navbar hamActive={hamActive} setHamActive={setHamActive} />
      <NavbarResponsive hamActive={hamActive} />
      <Hero
        title={`Why to buy an ACM Membership?`}
        desc="ACM (Association for Computing Machinery) student chapters provide a range of benefits for students interested in computer science and related fields. Access to cutting-edge research, Career Development, Library access and discounts are some of the higlights of your ACM Membership."
      />
      <br />

      <Benifits points={points} title={"Why Membership ? "} />
      <center>
        <p
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            paddingLeft: "10vw",
          }}
        >
          Overall, ACM student chapters provide a valuable resource for students
          looking to advance their knowledge, skills, and careers in the field
          of IT.
        </p>
      </center>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          paddingLeft: "10vw",
          gap: "1rem",
        }}
      >
        <h2> Point of Contact for Membership</h2>

        <ProfileCard
          desc={
            <p>
              Public Relations Officer
              <br /> Email Address:{" "}
              <a href="mailto:21113004@pvgcoet.ac.in">
                {" "}
                21113004@pvgcoet.ac.in
              </a>
            </p>
          }
          title={"Pawan Chate"}
          photoUrl="https://i.ibb.co/k5zbGKr/pawanphoto.jpg"
          btnTitle={
            <>
              <span> Contact via &nbsp;&nbsp;</span>
              <svg
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-wr8ge5"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="LinkedInIcon"
                height={30}
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
              </svg>
            </>
          }
          btnLink={"https://www.linkedin.com/in/pawan-chate-21113004/"}
        />
      </div>
      <Programs programs={programs_shopper} />
    </div>
  );
};

export default Why;
