import "./header.scss";

const Header = () => {
  return (
    <div className="header flex justify-between">
      <div className="header-left basis-1/2">
        <p>Logo</p>
      </div>
      <div className="basis-1/2">
        <p>Name</p>
        <p>userImage</p>
      </div>
    </div>
  );
};
export default Header;
