import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking </span>app
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nemo
            delectus voluptatum.
          </p>
          <button className="btn btn-hero">
            <Link to="/register">Login/Register</Link>
          </button>
        </div>
        <img src={main} alt="" className="img main-img" />
      </div>
      <h1>Landing</h1>
    </Wrapper>
  );
};

export default Landing;
