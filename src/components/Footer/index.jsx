import github from "/github.png";
import linkedin from "/linkedin.png";
import twitter from "/twitter.png";
import "./index.css";

function Footer() {
  return (
    <footer>
      <div className="side-padding icons">
        <a href="https://github.com/MReyna12">
          <img src={github} alt="github icon" />
        </a>
        <a href="https://www.linkedin.com/in/michaelpreyna/">
          <img src={linkedin} alt="linkedin icon" />
        </a>
        <a href="https://twitter.com/michaelpreyna">
          <img src={twitter} alt="twitter icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
