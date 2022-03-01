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
      <h5 style={{ justifySelf: "start" }}>Job Details:</h5>
      <p>{description}</p>
      <h5>What I learned:</h5>
      {learned.map((e) => (
        <li>{e}</li>
      ))}
    </GridTextStyled>
  );
}

export default function Jobs() {
  return (
    <TextContainerStyled>
      <Job
        title="Office Assistent"
        periode="10/2018--4/2019"
        company="Wuhan Technology and Business University"
        description="Run errands between offices, Organize data using office toolset, help foreign professors with local languages."
        learned={[
          "be humble and let people know if I need help",
          "write down tasks on calendar while accepting it",
        ]}
      />
      <Job
        title="team member"
        periode="6/2019--9/2019"
        company="Unlimited Biking"
        description="Recommend bicycle rental and bicycle tour to tourists, Prepare and take back bicycle"
        learned={[
          "smile and politeness can never hurt",
          "more working knowledge equals better performance",
        ]}
      />
    </TextContainerStyled>
  );
}
