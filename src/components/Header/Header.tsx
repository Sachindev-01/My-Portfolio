import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

import NavLink from "./NavigationLink";
import { navigationUrls } from "../../utils/constant";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <section className="w-full bg-transparent">
      <header className="max-w-7xl mx-auto px-4 py-3 fixed left-0 right-0 z-40">
        <nav className="lg:flex lg:space-x-12">
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
                className="lg:hidden flex flex-col justify-center"
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
