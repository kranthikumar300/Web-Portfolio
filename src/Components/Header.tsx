import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const NavMenu = ["services", "about"];

  return (
    <header className="sticky top-0 z-10 flex justify-between px-32 py-3 bg-[#efede3]">
      <Link
        to="/"
        className="font-body text-2xl font-bold text-white bg-textColor px-1"
      >
        @Kranthi.
      </Link>

      <nav className="space-x-10 flex items-center px-2">
        {NavMenu.map((item, index) => (
          <NavLink to={`/${item}`} key={index}>
            {item.toUpperCase()}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
