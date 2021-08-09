import './Navbar.scss';
import NavItem from '../NavItem/NavItem';
import { faCompress } from "@fortawesome/free-solid-svg-icons";
import { faCompressAlt } from "@fortawesome/free-solid-svg-icons";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { faSortAlphaUpAlt } from "@fortawesome/free-solid-svg-icons";


const Navbar = () =>{
  return (
    <div className="navbar">
      <div className="container">
        <div className="row w-100 pt-2">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <img src="/logo.png" className="logo" alt="" />
            <h2>
              <strong>BULK</strong> IMAGER
            </h2>
          </div>
        </div>
        <div className="row w-100 pt-3">
          <div className="col-12 d-flex justify-content-center align-items-center ">
            <NavItem icon={faCompress} title="Compress" route="/compress" />
            <NavItem icon={faCogs} title="Optimize" route="/optimize" />
            <NavItem icon={faCompressAlt} title="Resize" route="/resize" />
            <NavItem icon={faSortAlphaUpAlt} title="Rename" route="/rename" />
          </div>
        </div>
      </div>
    </div>
  );
} 

export default Navbar;