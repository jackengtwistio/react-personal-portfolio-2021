import nyu from "./pic/dm/nyu-combined.pdf";
import google from "./pic/dm/google-combined.pdf";
import GPy from "./pic/dm/GPy1.pdf";
import pyFFD from "./pic/dm/GPy1.pdf";
import pyDStruc from "./pic/dm/pyDStruc.pdf";
import pyDC from "./pic/dm/pyDC.pdf";
import pyClassInh from "./pic/dm/pyClassInh.pdf";
import pyIBM from "./pic/dm/pyIBM.pdf";
import { PopupPageStyled } from "../../css/popup";
import { GridContainer, Title } from "./compos";

export default function DM({ children }) {
  return (
    <PopupPageStyled>
      {children}
      <Title
        intro="GridPicStyled,
PicContainerStyled,
GridStyled,
GridContainerStyled,
ObjContainerStyled,
GridObjStyled,"
        title="Data Manipulation"
      />

      <GridContainer
        items={[{ url: google }]}
        type="application/pdf"
        subtitle="Data Analysis"
        caption="the data analysis courses certified by Google I have completed"
      />
      <GridContainer
        items={[{ url: nyu }]}
        type="application/pdf"
        subtitle="Data Visualization"
        caption="Data visualization course completion from NYU"
      />
      <GridContainer
        items={[
          {
            url: "https://jackengtwistio.github.io/airline_routes_d3js/",
            description: "github io",
          },
        ]}
        type="text/html"
        subtitle="D3.js"
        caption="airline network links between countries(d3 interactive html page)"
      />
      <GridContainer
        items={[{ url: GPy }, { url: pyFFD },{url:pyDStruc},{url:pyDC},{url:pyClassInh},{url:pyIBM}]}
        type="application/pdf"
        subtitle="Python"
        caption="basic python courses I've completed "
      />
      <GridContainer
        items={[
          {
            url: "https://github.com/jackengtwistio/webScrapper/blob/main/craigslist-puppeteer.js",
            description: "getting a list of jobs from craigslist",
          },
          {
            url: "https://github.com/jackengtwistio/webScrapper/blob/main/hackr-puppeteer.js",
            description: "getting a list of course reviews from hackrio",
          },
        ]}
        type="text/html"
        subtitle="Webscraping"
        caption="mini programs use puppeteer to scrap data from some website"
      />
    </PopupPageStyled>
  );
}
