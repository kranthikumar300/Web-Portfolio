import { NavLink, Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaServicestack } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {
  const NavMenu = ["skills", "about"];
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <header className="flex justify-between items-center sticky top-0 z-10 px-5 py-3 bg-[#efede3]">
        {/* Logo */}
        <Link
          onClick={() => setIsMenuOpen(true)}
          to="/"
          className="font-body text-2xl font-bold text-white bg-textColor"
        >
          @Kranthi.
        </Link>

        {/* Navigation Menu in Laptop */}
        <nav className="hidden gap-10 sm:flex items-center">
          {NavMenu.map((item, index) => (
            <NavLink to={`/${item}`} key={index}>
              {item.toUpperCase()}
            </NavLink>
          ))}
        </nav>

        {/* Navigation Menu in Mobile */}
        <div className="flex items-center justify-center sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <GiHamburgerMenu className="h-5 w-5" />
            ) : (
              <RxCross2 className="h-5 w-5" />
            )}
          </button>

          {/* Mobile Menu Items */}
          {!isMenuOpen && (
            <nav className="md:hidden absolute top-14 left-0 w-56 h-screen bg-[#efede3]">
              <div className="flex justify-between flex-col h-full gap-4 pb-20">
                <div className="flex flex-col items-center gap-4 mt-10">
                  {NavMenu.map((item, index) => (
                    <NavLink
                      to={`/${item}`}
                      key={index}
                      onClick={() => {
                        setIsMenuOpen(true);
                      }}
                      className="font-semibold"
                    >
                      {item.toUpperCase()}
                    </NavLink>
                  ))}
                </div>

                {/* Services Button */}
                <button
                  onClick={() => {
                    setIsMenuOpen(true);
                    navigate("/skills#services-offer");
                  }}
                  className="flex justify-center items-center gap-2 bg-[#1B1C1D] text-white border-black border-2 rounded-md px-5 py-2 cursor-pointer mx-auto"
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
