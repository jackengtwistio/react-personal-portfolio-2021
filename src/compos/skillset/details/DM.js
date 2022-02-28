import { useEffect } from "react";
import nyu from "./pic/dm/nyu-combined.pdf";
import google from "./pic/dm/google-combined.pdf";
import { GridPicItem, GridPics, GridItem, GridContainer } from "../../css/grid";
import { PopupPageStyled } from "../../css/popup";

export default function DM({ setCheckedSkill, children }) {
  useEffect(() => {
    setCheckedSkill((prev) => ({ ...prev, DM: "DM" }));
    return () => {};
  }, []);

  return (
    <PopupPageStyled>
      {children}
      <h3>Data Manipulation</h3>

      <h4>Data Visualization</h4>
      <p>
        Data visualization course completion from NYU and my finished homeworks
      </p>
      <GridContainer>
        <GridPicItem>
          <object data={nyu} type="application/pdf" width="100%" height="100%">
            <a href="https://www.udemy.com/certificate/UC-d053c984-d018-4a74-8e87-edd22fd744b7">
              certificate source
            </a>
          </object>
        </GridPicItem>
        <GridPicItem>
          <li>
            <a href="https://jackengtwistio.github.io/airline_routes_d3js/">
              airline network links between countries(d3 interactive html page)
            </a>
          </li>
          <iframe
            src="https://jackengtwistio.github.io/airline_routes_d3js/"
            title="description"
            style={{ height: "100%", width: "100%" }}
          ></iframe>
        </GridPicItem>
      </GridContainer>

      <h4>analysis certification from google</h4>
      <p>
        Data visualization course completion from NYU and my finished homework
      </p>
      <GridContainer>
        <GridPicItem>
          <object
            data={google}
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <a href="https://www.udemy.com/certificate/UC-d053c984-d018-4a74-8e87-edd22fd744b7">
              certificate source
            </a>
          </object>
        </GridPicItem>
      </GridContainer>
      <h4>webscraping</h4>
      <p>mini programs use puppeteer to extract data from some website:</p>
      <GridPics>
        <GridPicItem>
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
        </GridPicItem>
      </GridPics>
    </PopupPageStyled>
  );
}
