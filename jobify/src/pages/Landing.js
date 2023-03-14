import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import Wrapper from '../assets/wrappers/LandingPage';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby migas thundercats semiotics godard, cred pug gatekeep 8-bit
            intelligentsia aesthetic kitsch live-edge. Gluten-free fixie prism
            semiotics.
          </p>
          <button className="btn btn-heri">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
      </Wrapper>
  );
};

export default Landing;
