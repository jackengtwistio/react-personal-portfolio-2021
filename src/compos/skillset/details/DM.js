import { useEffect } from "react";
import pic from "../certif/py-class-inheritance.png";
import { GridPicItem, GridPics, GridItem, GridContainer } from "../../css/grid";
import { PopupPageStyled } from "../../css/popup";
import Summary from "./summary";

export default function DM({ setCheckedSkill, children }) {
  useEffect(() => {
    setCheckedSkill((prev) => ({ ...prev, DM: "DM" }));
    return () => {};
  }, []);

  return (
    <PopupPageStyled>
      {children}
      <div>
        <fieldset>
          <Summary
            list="data analysis, webscraping, general SQL, MongoDB, basic CRUD operation, data visualization, d3.js"
            title="Basic Knowledge"
          />
          <GridContainer>
            <fieldset>
              <legend>webscraping</legend>
              <p>
                mini programs use puppeteer to extract data from some website:
              </p>
              <ul>
                <li>
                  <a href="https://github.com/jackengtwistio/webScrapper/blob/main/craigslist-puppeteer.js">
                    getting a list of jobs from craigslist
                  </a>
                </li>
                <li>
                  <a href="https://github.com/jackengtwistio/webScrapper/blob/main/hackr-puppeteer.js">
                    getting a list of course reviews from hackrio
                  </a>
                </li>
              </ul>
            </fieldset>
            <fieldset>
              <legend>data visualization</legend>
              <p>d3 course completion from NYU and my finished homework</p>
              <li>
                <a href="https://jackengtwistio.github.io/airline_routes_d3js/">
                  airline numbers between countries(d3 interactive html page)
                </a>
              </li>
              <li>
                <a href="https://public.tableau.com/views/new-york-cuisine/score-cuisine-monthly?:language=en-US&:display_count=n&:origin=viz_share_link">
                  new york cuisine analisation using tableau
                </a>
              </li>
              <GridPicItem backgroundImg={pic} />
            </fieldset>
            <fieldset>
              <legend>analysis certification from google</legend>
              <p>d3 course completion from NYU and my finished homework</p>
              <p>
                <a href="https://jackengtwistio.github.io/airline_routes_d3js/">
                  homework
                </a>
              </p>
            </fieldset>
          </GridContainer>
        </fieldset>
      </div>
    </PopupPageStyled>
  );
}
