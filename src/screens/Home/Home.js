import React, { useState } from "react";
import { features } from "../../constants/features";

// Import data
import NavbarResponsive from "../../components/NavbarResponsive/NavbarResponsive";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Features from "../../components/Features/Features";
import Programs from "../../components/Programs/Programs";
import { programs_shopper } from "../../constants/programs_shopper";
import History from "../../components/History/History";
import Benifits from "../../components/Membershipbenifits/Benefits";
import sanityClient from "../../client";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    const query = `
    *[_type=="event"]{
      title , 
      _id,
      date,
    description ,
    slug,
    categories,
    mainImage,
    }
    `;

    sanityClient
      .fetch(query)

      .then((data) => {
        console.log("ss", data);
        setEventsData(data);
      })

      .catch(console.error);
  }, []);
  const [eventsData, setEventsData] = useState([]);

  const [hamActive, setHamActive] = useState(false);
  const points = [
    "Thousands of online books, online courses, videos, and tutorials from Skillsoft covering the most in-demand skills, software, and technologies for computing professionals",
    "Access to a custom collection of more than 2,000 courses, skill assessments, learning paths, and certification exam prep from Pluralsight",
    "The option to subscribe to the full ACM Digital Library, which includes over 2 million pages of text",
    "Ability to search DL, access bibliographic citations, view article abstracts",
    "A full year (12 issues) print subscription to Communications of the ACM",
  ];
  return (
    <div className="App">
      <Navbar hamActive={hamActive} setHamActive={setHamActive} />
      <NavbarResponsive hamActive={hamActive} />
      <Hero
        desc={` where we use our knowledge and skills to advance the profession and
            make a positive impact. ACM strengthens the profession's collective
            voice through strong leadership, promotion of the highest standards,
            and recognition of technical excellence. ACM supports the
            professional growth of its members by providing opportunities for
            life-long learning, career development, and professional networking.`}
        title={`PVGCOET ACM Student Chapter`}
        subtitle={`Inspire to Innovate`}
      />

      <Features
        featureData={features}
        title="Our recent Events"
        events={eventsData}
      />

      <History />
      <Benifits title={"Benifits of ACM"} points={points} />
      {/* <Growth /> */}
      {/* <Questions /> */}
      {/* <Programs programs={programs_user} /> */}
      <Programs programs={programs_shopper} />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
