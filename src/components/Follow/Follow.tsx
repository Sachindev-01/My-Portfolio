import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { socials } from "../../utils/constant";

const Follow = () => {
  const [isHomePage, setIsHomePage] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [location.pathname]);

  return (
    <section
      className={`${isHomePage ? "mt-12 pb-8 lg:mt-0 lg:pb-2 lg:fixed lg:right-8 lg:bottom-4" : "fixed top-20 right-0 left-0"}`}
    >
      <div className={`${isHomePage ? "flex justify-center gap-3 lg:flex lg:flex-col lg:gap-[6px] lg:justify-center" : "flex justify-center" } `}>
        {socials?.map(({ name, icon, url }) => (
          <Link
            to={url}
            key={name}
            className="text-2xl text-[#3f9eee] p-2 rounded-full hover:scale-150 transition duration-150 ease-in-out"
          >
            {icon}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Follow;
