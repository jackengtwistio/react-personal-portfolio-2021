import { GridItem, GridContainer } from "./css/grid";
export default function Info() {
  return (
    <GridContainer>
      <GridItem>
        <p>name:Shuo Yang(jack)</p>
        <p>location: New York City</p>
        <address>
          <p>
            <a href="mailto:jtwist108@gmail.com">email: jtwist108@gmail.com</a>
          </p>
          <p>
            <a href="tel:+13474992944">cellphone: (347) 499-2944</a>
          </p>
        </address>
      </GridItem>
      <GridItem>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </GridItem>
    </GridContainer>
  );
}
