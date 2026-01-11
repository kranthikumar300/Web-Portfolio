import { NavLink, Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaServicestack } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {
  const NavMenu = ["skills", "about"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="sticky top-0 z-10 flex justify-between px-5 py-3 bg-[#efede3]">
        <Link
          to="/"
          className="font-body text-2xl font-bold text-white bg-textColor"
        >
          @Kranthi.
        </Link>

        <nav className="hidden gap-10 sm:flex sm:justify-center items-center px-2">
          {NavMenu.map((item, index) => (
            <NavLink to={`/${item}`} key={index}>
              {item.toUpperCase()}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center justify-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <GiHamburgerMenu className="block sm:hidden h-5 w-5" />
            ) : (
              <RxCross2 className="block sm:hidden h-5 w-5" />
            )}
          </button>

          {!isMenuOpen && (
            <nav className="md:hidden absolute top-14 left-0 w-56 h-screen bg-[#efede3]">
              <div className="flex flex-col justify-center items-center pt-10 gap-4">
                {NavMenu.map((item, index) => (
                  <NavLink to={`/${item}`} key={index}>
                    {item.toUpperCase()}
                  </NavLink>
                ))}

                <button
                  onClick={() => navigate("/skills#services-offer")}
                  className="flex items-center justify-center gap-2 bg-[#1B1C1D] text-white border-black border-2 rounded-md px-5 py-2 cursor-pointer"
                >
                  <FaServicestack className="h-5 w-5" />
                  Services
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
