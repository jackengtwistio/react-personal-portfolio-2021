import pic from "./skillset/img/this.png";
import bgImg from "./skillset/img/webUsed.png";
import { HowDidStyled } from "./css/howDid";
import React, { useEffect, useRef } from "react";

export default function HowDid() {
  let clientWidth = window.innerWidth;
  const storedMapHeight = Number(localStorage.getItem("mapHeight"));
  const storedHowdidHeight = Number(localStorage.getItem("howdidHeight"));
  const storedPaddingTop = Number(localStorage.getItem("paddingTop"));
  const mapRef = useRef(null);
  const howdidRef = useRef(null);
  useEffect(() => {
    localStorage.setItem("mapHeight", String(mapRef.current.clientHeight));
    localStorage.setItem(
      "howdidHeight",
      String(howdidRef.current.clientHeight)
    );
    // setMapHeight(mapRef.current.clientHeight);
    // setHowdidHeight(howdidRef.current.clientHeight);
    if (storedMapHeight - storedHowdidHeight > 0) {
      localStorage.setItem(
        "paddingTop",
        String(storedMapHeight - storedHowdidHeight)
      );
    }
    // console.log("Map first", storedMapHeight);
    // console.log("howdid first", storedHowdidHeight);
    // console.log("topPadding first", storedPaddingTop);
  }, [storedMapHeight, storedHowdidHeight]);

  return (
    <HowDidStyled
      scale={clientWidth / 760}
      left={clientWidth / 2 - 760 / 2}
      paddingTop={storedPaddingTop}
      mapTop={Math.abs(storedMapHeight - 296) / 2}
      ref={howdidRef}
      id="howdid"
    >
      <map name="image-map" ref={mapRef}>
        <img
          src={bgImg}
          useMap="#image-map"
          alt="web links"
          className="webs-map"
          id="map-img"
          ref={mapRef}
        />
        <area
          target="_blank"
          alt="treehouse"
          title="treehouse"
          href="https://teamtreehouse.com/"
          coords="70,47,42,60,41,92,72,111,103,94,102,61"
          shape="poly"
        ></area>
        <area
          target="_blank"
          alt="google"
          title="google"
          href="https://www.coursera.org/account/accomplishments/professional-cert/94NF7LSBKHMM"
          coords="161,92,45"
          shape="circle"
        ></area>
        <area
          target="_blank"
          alt="codecademy"
          title="codecademy"
          href="https://www.codecademy.com/"
          coords="72,147,121,188"
          shape="rect"
        ></area>
        <area
          target="_blank"
          alt="pluralsight"
          title="pluralsight"
          href="https://app.pluralsight.com/profile/jack-twist"
          coords="67,250,20"
          shape="circle"
        ></area>
        <area
          target="_blank"
          alt="udemy"
          title="udemy"
          href="https://www.udemy.com/user/jack-jack-21/"
          coords="330,254,219,198"
          shape="rect"
        ></area>
        <area
          target="_blank"
          alt="odinproject"
          title="odinproject"
          href="https://www.theodinproject.com/"
          coords="142,198,140,228,109,230,110,245,191,244,190,231,167,226,165,198"
          shape="poly"
        ></area>
        <area
          target="_blank"
          alt="linkedin"
          title="linkedin"
          href="https://www.linkedin.com/learning/subscription/topics?upsellOrderOrigin=sem_src.go-pa_c.LLS-C_NAMER_US_T1_EN-US_SEM_SEM_GoogleAds_NA_All_NA_NA_Core_NA_LIL-HeadTerm-MKAG_Brand_Exact_pkw.linkedin+learning_pmt.e_pcrid.343926466304_pdv.c_plc._trgid.kwd-47311766595_net.g_learning&amp;hero=1&amp;veh=sem_src.go-pa_c.LLS-C_NAMER_US_T1_EN-US_SEM_SEM_GoogleAds_NA_All_NA_NA_Core_NA_LIL-HeadTerm-MKAG_Brand_Exact_pkw.linkedin+learning_pmt.e_pcrid.343926466304_pdv.c_plc._trgid.kwd-47311766595_net.g_learning&amp;src=go-pa&amp;gclid=Cj0KCQiA3-yQBhD3ARIsAHuHT67hjgBaJq5hMIvttzYaRBFO_QmIvAv9YrvEq0cUO0Es_zTAXVKDm1oaAm_cEALw_wcB&amp;mcid=6841886150127296513"
          coords="208,185,167,146"
          shape="rect"
        ></area>
        <area
          target="_blank"
          alt="coursera"
          title="coursera"
          href="https://www.coursera.org/account/accomplishments/specialization/YE8JRSR2UCU3"
          coords="205,45,386,75"
          shape="rect"
        ></area>
        <area
          target="_blank"
          alt="freecodecamp"
          title="freecodecamp"
          href="https://www.freecodecamp.org/"
          coords="225,94,359,112"
          shape="rect"
        ></area>
        <area
          target="_blank"
          alt="michigan"
          title="michigan"
          href="https://www.coursera.org/account/accomplishments/verify/TKX7ZA45CTY7"
          coords="218,132,298,186"
          shape="rect"
        ></area>
      </map>
      <div className="container">
        <h2 className="how-title">'Online Community' Taught Developer</h2>
        <p className="how-subtitle">
          I'm proud to tell you how I learned from online community
        </p>
        <div className="how-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <a href="https://github.com/jackengtwistio/jack" className="how-img">
          <img src={pic} alt="source code from github" />
        </a>
      </div>
    </HowDidStyled>
  );
}
