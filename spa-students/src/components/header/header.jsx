import "./header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  var car = "Alexis";
  return (
    <div className="header flex justify-between">
      <h1>Header</h1>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/student/" + car}>Student</NavLink>
        </li>
      </ul>
      {/*       
      <div className="header-left basis-1/2">
        <p>Logo</p>
      </div>
      <div className="basis-1/2">
        <p>Name</p>
        <p>userImage</p>
      </div> */}
    </div>
  );
};
export default Header;
