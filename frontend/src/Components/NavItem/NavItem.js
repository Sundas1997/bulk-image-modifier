import './NavItem.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
  const {title, icon, route} = props;
  return (
    <div className="nav-item">
      <NavLink
        to={route}
        className="navlink d-flex justify-content-center align-items-center flex-column"
        data-toggle="tooltip"
        data-placement="top"
        title={title}
        activeClassName="navlink-active"
        >
        <FontAwesomeIcon icon={icon} />
        <h6>{title}</h6>
      </NavLink>
    </div>
  );
}

export default NavItem;