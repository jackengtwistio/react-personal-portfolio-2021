import { GridTextStyled, TextContainerStyled } from "./css/grid";

function Job(props) {
  const { title, periode, company, description, learned } = props;
  return (
    <GridTextStyled>
      <div>
        <h4>{title}</h4>
        <small>{periode}</small>
        <br />
        <small>{company}</small>
      </div>
      <h5 style={{ justifySelf: "start" }}>Description:</h5>
      <p>{description}</p>
      <h5>What I learned:</h5>
      <p>{learned}</p>
    </GridTextStyled>
  );
}

export default function Jobs() {
  return (
    <TextContainerStyled>
      <Job
        title="Office Assistent"
        periode="11/2018--4/2019"
        company="Wuhan Technology and Business University"
        description="alsdfhablsjdf hbchfqules 31.3 KiB 15 modules
        ./node_modules/css-loader/dist/ms"
        learned="alsdfhablsjdf hbchfqules 31.3 KiB 15 modules
        ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??r"
      />
      <Job
        title="Office Assistent"
        periode="11/2018--4/2019"
        company="Wuhan Technology and Business University"
        description="alsdfhablsjdf hbchfqules 31.3 KiB 15 modules
      ./node_modules/css-loader/dist/ms"
        learned="alsdfhablsjdf hbchfqules 31.3 KiB 15 modules
      ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??r"
      />
    </TextContainerStyled>
  );
}
