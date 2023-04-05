const NavBar = () => {
  return (
    <nav>
      <ul>
        <img
          src="https://uploads-ssl.webflow.com/6102a77c4733362012bd355d/6103ff3c8979ee0d8a995fa6_TRUENDO-Black.svg"
          alt="logo"
        />
        <div className="container">
          <input type="text" placeholder="Search..."></input>
          <div className="search"></div>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
