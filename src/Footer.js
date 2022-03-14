import "./Home.css";
import { Link, Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer
        className="z-10 bg-green-700
             text-xl text-whitish
             fixed
             inset-x-0
             bottom-0
             p-4
             w-4/12"
      >
        <a className="text-whitish" href="../portafolioV1/index.html">
        <Link to="/Oldsite">Click here to access old version of this site.</Link>
        </a>
      </footer>
    </>
  );
};

export default Footer;
