import { Outlet, Link } from "react-router-dom";
import WaveSvg from "./components/UI/header-svg/WaveSVG";

const Layout = () => {
  return (
    <div style={{width:"100vw"}}>
      <WaveSvg/>
      <div className="header-bar">
        <nav>
          <ul>
            <h1 className="bar-item" style={{color: "#fcc300", fontSize: "40px"}}>
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
