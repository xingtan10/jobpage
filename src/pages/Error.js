import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="" className="img" />
        <h3>Page not found</h3>
        <p>We cant seems to find your page</p>

        <Link to="/">Back to home</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
