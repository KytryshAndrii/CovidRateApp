import { Outlet, Link } from "react-router-dom";
import WaveSvg from "./components/UI/header-svg/WaveSVG";
import "./index.css";

const Layout = () => {
  return (
    <div className="w-screen">
      <WaveSvg/>
      <div className="flex justify-center list-none shadow-lg">
        <nav>
          <ul>
            <h1 className="bar-item text-amber-400 text-5xl">
              Covid Rate App
            </h1>
            <li className="bar-item">
              <Link className="style"  to="/">World wide Covid</Link>
            </li>
            <li className="bar-item">
              <Link className="style"  to="/Custom covid rate">Covid Rate by Country</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  )
};

export default Layout;
