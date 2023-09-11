import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { mentors, team23 } from "../../constants/team";
const TeamDisplay = () => {
  return (
    <div style={{ paddingLeft: "2rem" }}>
      <br />
      <br />
      <center>
        <h1> Chapter Team For 2022-23 </h1>
        <p style={{ width: "80%", textAlign: "left" }}>
          This year's team was mentored by Mr.S.G. Kamble Sir (Professor at
          PVGCOET) and IT Department Head Mr.Surendra Mahajan sir also provide
          support for events and workshops, they provide resources and support
          for ACM student chapter events and workshops, such as guest speakers,
          facilities, and equipment. Kamble Sir encourage student participation
          by promoting them through college communications, such as newsletters
          and bulletin boards.
        </p>
      </center>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          //   alignItems: "center",
          justifyContent: "space-evenly",
          scale: "0.8",
          flexWrap: "wrap",
        }}
      >
        {team23
          ? team23.map((team) => (
              //   <div style={{ flexBasis: "25.333333%" }}>
              <ProfileCard
                desc={team.desc}
                title={team.title}
                photoUrl={team.photoUrl}
                btnData={team.btnData}
              />
              //   </div>
            ))
          : "No Team Data"}
      </div>
      <center>
        <h1> Chapter Mentors </h1>
        <p style={{ width: "80%", textAlign: "left" }}>
          By providing support and resources, HODs and IT departments are
          helping ACM student chapters to thrive and provide valuable
          experiences for students and for all of us.
        </p>
      </center>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          //   alignItems: "center",
          justifyContent: "space-evenly",
          scale: "0.8",
          flexWrap: "wrap",
        }}
      >
        {mentors
          ? mentors.map((team) => (
              //   <div style={{ flexBasis: "25.333333%" }}>
              <ProfileCard
                desc={team.desc}
                title={team.title}
                photoUrl={team.photoUrl}
                btnData={team.btnData}
              />
              //   </div>
            ))
          : "No Mentor Data"}
      </div>
    </div>
  );
};

export default TeamDisplay;
