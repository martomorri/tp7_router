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
      {/* <NavItem
        item={
          <img
            className="logo"
            src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.13/mercadolibre/logo__large_plus.png"
            alt=""
          />
        }
        logo={true}
      />
      <NavItem item="Home" />
      <NavItem item="Productos" path="productos" />
      <NavItem item="Categorias" dropdown={true} categories={categories} />
      <NavItem item="Contacto" path="contacto" /> */}
    </ul>
  );
}
