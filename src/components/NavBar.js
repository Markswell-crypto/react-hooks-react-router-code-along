import {Link} from "react-router-dom";
function NavBar() {
    const linkStyles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
      };
    return (
      <div>
        <Link
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          /* add styling to Link */
          style={linkStyles}
          /* add prop for activeStyle */
          activeStyle={{background: "darkblue",}}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={linkStyles}
          activeStyle={{background: "darkblue",}}
        >
          About
        </Link>
        <Link
          to="/login"
          style={linkStyles}
          activeStyle={{background: "darkblue",}}
        >
          Login
        </Link>
      </div>
    );
  }
  export default NavBar