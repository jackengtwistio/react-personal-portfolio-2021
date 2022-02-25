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
        <Summary basic="data analysis, webscraping, general SQL, MongoDB, basic CRUD operation, data visualization, d3.js" />
        <section>
          <h2>more details</h2>
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
              <p>
                <a href="https://github.com/jackengtwistio/airline_routes_d3js">
                  homework
                </a>
              </p>
              <GridPicItem backgroundImg={pic} />
            </fieldset>
          </GridContainer>
        </section>
      </div>
    </PopupPageStyled>
  );
}
