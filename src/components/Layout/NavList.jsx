import NavItem from "./NavItem";
import './NavList.css'

export default function NavList({ listPosition, navItems }) {
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
