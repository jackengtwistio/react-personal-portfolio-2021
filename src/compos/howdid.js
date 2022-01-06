import pic from "./img/about-AI.jpg";

export default function HowDid() {
  return (
    <section className="how-did">
      <h2 className="how-title">Online 'Community Taught' Developer</h2>
      <p className="how-subtitle">
        I'm proud to share how I learned from online community
      </p>

      <div className="how-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <img
        src={pic}
        alt="a simple web page template I built after one month of html and css learning"
        className="how-img"
      />
    </section>
  );
}
