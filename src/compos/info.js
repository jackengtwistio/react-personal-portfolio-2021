import { GridTextStyled, TextContainerStyled } from "./css/grid";
export default function Info() {
  return (
    <TextContainerStyled>
      <GridTextStyled>
        <p>name:Shuo Yang(jack)</p>
        <p>location: New York City</p>
        <p>education: bachelor(business administration)</p>
        <address>
          <p>
            email:
            <a href="mailto:jtwist108@gmail.com"> jtwist108@gmail.com</a>
          </p>
          <p>
            cellphone:
            <a href="tel:+13474992944"> (347) 499-2944</a>
          </p>
        </address>
      </GridTextStyled>
      <GridTextStyled>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </GridTextStyled>
    </TextContainerStyled>
  );
}
