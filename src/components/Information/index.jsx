import headshot from "/reyna-michael.jpg";
import mail from "/mail.png";
import "./index.css";

function Information() {
  return (
    <div>
      <div>
        <img
          src={headshot}
          className="headshot react"
          alt="Headshot photograph of Michael Reyna"
        />
      </div>
      <h1 className="side-padding">Michael Reyna</h1>
      <h2 className="side-padding">Frontend Developer</h2>
      <p className="portfolio side-padding">
        <a href="https://mreyna12.github.io/portfolioWebsite/">
          Portfolio Website
        </a>
      </p>
      <div className="side-padding">
        <button onClick={() => (window.location = "mailto:MReyna12@live.com")}>
          <img src={mail} alt="Mail envelope icon" /> Email
        </button>
      </div>
    </div>
  );
}

export default Information;
