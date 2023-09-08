import NavItem from "./NavItem";
import { string, arrayOf } from 'prop-types'
import { NavItemShape } from '../../shapes'
import './NavList.css'

function NavList({ listPosition, navItems }) {
  return (
    <ul id={listPosition} className="navbar-nav me-auto mb-2 mb-lg-0">
      {navItems.map((i) => (
        <NavItem
          item={i.item}
          logo={i.logo}
          path={i.path}
          dropdown={i.dropdown}
          categories={i.categories}
        />
      ))}
    </ul>
  );
}

NavList.propTypes = {
  listPosition: string.isRequired,
  navItems: arrayOf(NavItemShape).isRequired
}

export default NavList
