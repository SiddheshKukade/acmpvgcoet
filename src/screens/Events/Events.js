import React, { useState } from "react";

// Import data
import NavbarResponsive from "../../components/NavbarResponsive/NavbarResponsive";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Growth from "../../components/Growth/Growth";
import Programs from "../../components/Programs/Programs";
import { programs_shopper } from "../../constants/programs_shopper";
import Benifits from "../../components/Membershipbenifits/Benefits";
import Features from "../../components/Features/Features";
import { upcoming } from "../../constants/events";
import sanityClient from "../../client";
import { useEffect } from "react";
import EventList from "./EventList";
const Events = () => {
  const [eventsData, setEventsData] = useState([]);
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
  console.log(eventsData);
  const [hamActive, setHamActive] = useState(false);
  return (
    <div className="App">
      <Navbar hamActive={hamActive} setHamActive={setHamActive} />
      <NavbarResponsive hamActive={hamActive} />
      <Hero
        title={"Events & Seminars"}
        desc="Register and access upcoming or past events conduted by ACM PVGCOET Chapter."
      />
      <br />
      <EventList
        events={eventsData}
        featureData={upcoming}
        title={"Our Upcoming Events"}
      />
      <Programs programs={programs_shopper} />
    </div>
  );
};

export default Events;
