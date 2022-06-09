import { GridTextStyled, TextContainerStyled } from "./css/grid";
export default function Info() {
  return (
    <TextContainerStyled>
      <GridTextStyled>
        <p>name:Shuo Yang(jack)</p>
        <p>location: New York City</p>
        <p>education: bachelor(computer science)</p>
        <address>
          <p>
            email:
            <a href="mailto:jtwist108@gmail.com"> jtwist108@gmail.com</a>
          </p>
          <p>
            cellphone:
            <a href="tel:+8613520426003"> +86 (135)2042-6003</a>
            <a href="tel:+13474992944"> +1 (347) 499-2944</a>
          </p>
          <p>
            resume:
            <a href="https://github.com/jackengtwistio/resume/blob/main/Untitled.pdf">
              paper like resume
            </a>
          </p>
        </address>
      </GridTextStyled>
      <GridTextStyled>
        <h4>something about me</h4>
        <p> I can easily be a workaholic with a job I like</p>
        <p> I'm a normad, I prefer work remotely</p>
        <p>
          Healthy diet,excercise,meditation are some of the most important
          things for me, it also improves my working efficiency.
        </p>
        <p>
          Easygoing,thoughtful,humble,cooperative,hardworking are some of the
          characteristics I've been always teaching myself.
        </p>
      </GridTextStyled>
    </TextContainerStyled>
  );
}
