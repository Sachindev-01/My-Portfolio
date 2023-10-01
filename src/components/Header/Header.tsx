import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

import NavLink from "./NavigationLink";
import { navigationUrls } from "../../utils/constant";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setToggle(false);
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="fixed h-24 w-full bg-transparent lg:backdrop-blur-md">
      <header className="max-w-7xl mx-auto px-4 py-3 fixed left-0 right-0 z-40 ">
        <nav
          className={`${
            isScrolling
              ? "bg-[#374151] rounded-md lg:rounded-none lg:bg-transparent"
              : ""
          } lg:flex lg:space-x-12 absolute`}
        >
          {toggle ? (
            <RxCrossCircled
              onClick={() => setToggle((prev) => !prev)}
              className="text-3xl mt-2 ml-1 text-black bg-[#d4e9fb] rounded-full cursor-pointer lg:hidden mb-2"
            />
          ) : (
            <FaBars
              onClick={() => setToggle((prev) => !prev)}
              className="text-3xl text-[#fff] mt-2 ml-1 cursor-pointer lg:hidden"
            />
          )}

          {toggle &&
            navigationUrls.map(({ urlName, url }) => (
              <div
                key={urlName}
                className="lg:hidden flex flex-col justify-center font-medium"
              >
                <NavLink urlName={urlName} url={url} handleToggle={setToggle} />
              </div>
            ))}

          {navigationUrls.map(({ urlName, url }) => (
            <div
              key={urlName}
              className="hidden lg:flex lg:flex-row lg:space-x-16 lg:justify-start"
            >
              <NavLink urlName={urlName} url={url} />
            </div>
          ))}
        </nav>
      </header>
    </section>
  );
};

export default Header;
