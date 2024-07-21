
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: 'none',
  marginRight: '10px', 
};
const linkStyle1= {
    textDecoration: 'none',
    marginRight: '50px', 
  };
  const linkStyle2 = {
    textDecoration: 'none',
    marginRight: '50px', 
  };

  

const ulStyle = {
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'center', 
  alignItems: 'center',
  height: '50px', 
  backgroundColor: 'deeppink' 
};
  

const Navbar = () => {
  return (
    <div style={ulStyle}>
        <li>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li>
          <Link to="/about" style={linkStyle1}>About</Link>
        </li>
        <li>
          <Link to="/*" style={linkStyle2}>Invalidscreen</Link>
        </li>
    </div>
  );
}

export default Navbar;
