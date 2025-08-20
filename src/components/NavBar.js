import logo from "../imgs/simplitubelogo.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt="SimpliTube By Ritik"
            width="100"
            height="30"
          />
        </a>

        <ul className="navbar-nav ms-3">
          <li className="nav-item">
            <a className="nav-link" href="https://drive.google.com/drive/u/0/folders/13g6Kg_o_hoV6HGW5s4nhFcL6C-tFdK4-"> Working Demo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
