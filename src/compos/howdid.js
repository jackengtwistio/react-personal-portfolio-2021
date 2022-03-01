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
          proud to talk how I learned web development from online community
        </p>
        <div className="how-text">
          <p>
            One big reason I chose to learn python and MERN stack JS is that
            they have the most abundant learning recourses to begin with.
          </p>
          <p>
            After some basic computer science courses from Codecademy and Khan
            Academy, I used 5 weeks(time subscripted) to watch all html css and
            plain javascript from Treehouse, I gained the basic knowledge there
            but couldn't build anything;
          </p>
          <p>
            Then after some frustration with Pluralsight and Linkedin Learning,
            <a href="https://scrimba.com/learn/frontend">Scrimba</a> saved me,
            because their integrated and interactive coding environment, I could
            easily code along
          </p>
          <p>
            After some courses about nodejs on Udemy, I realized that I still
            did't know anything about networking, so I got some courses based on
            Comptia A+ from Udemy and courses of IT support from Google
          </p>
          <p>
            Data manipulation is one of my passion, I believe every business all
            can benefit from it. I finished data analisis from google and data
            visualization from NYU, they are very helpful to me as a beginner.
          </p>
        </div>

        <a
          href="https://github.com/jackengtwistio/jack"
          className="how-img"
          title="source code on GitHub"
        >
          <img src={pic} alt="source code from github" />
        </a>
      </div>
    </HowDidStyled>
  );
}
