import logo from "../imgs/simplitubelogo.png"
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top w-100">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img 
            src={logo}
            alt="SimpliTube By Ritik" 
            width="100" 
            height="30" 
            
          />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
