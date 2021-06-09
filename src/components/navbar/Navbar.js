import "./Navbar.css";
import avatar from "../../assets/avatar.svg";

const styles = {
  marginLeft:'550px',
  // alignItems:  'right',
  textDecoration: 'none',
  // color: 'blue',
}

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="main__title">
          {/* <div className="main__greeting"> */}
          <a href="https://dcfshome.netlify.app" style={{textDecoration: 'none'}} target="_blank"> <h1>Digital Course File System</h1></a>
            {/* <p>Welcome to your admin dashboard</p> */}
          {/* </div> */}
          <a href="https://dcfshome.netlify.app/#contact" style={styles} target="_blank"><h1>Feedback & Queries</h1></a>

        </div>
      {/* <div className="navbar__left">
        <a href="#">Subscribers</a>
        <a href="#">Video Management</a>
        <a className="active_link" href="#">
          Admin
        </a>
      </div> */}
      {/* <div className="navbar__right">
        <a href="#">
          <i className="fa fa-search" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fa fa-clock-o" aria-hidden="true"></i>
        </a>
        <a href="#!">
          <img width="30" src={avatar} alt="avatar" />
        </a>
      </div> */}
    </nav>
  );
};

export default Navbar;
