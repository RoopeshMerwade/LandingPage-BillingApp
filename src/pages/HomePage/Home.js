import React from "react";
import { InfoSection, Pricing } from "../../components";
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour } from "./Data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Pricing />
      <InfoSection {...homeObjFour} />
      {/* <Link to="/contactus">Contact Us</Link> */}
    </>
  );
};

export default Home;
