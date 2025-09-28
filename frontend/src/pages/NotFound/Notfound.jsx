import "./Notfound.css";
import notFoundIllustration from "../../assets/404 error with a tired person-pana.svg";

const Notfound = () => {
  return (
    <div className="pnf-main-container">
      {/* <h1>
        <strong>404</strong> Not Found
      </h1> */}
      <div className="pnf-vector-container">
        <img src={notFoundIllustration} alt="Page Not Found" />
      </div>
    </div>
  );
};

export default Notfound;
