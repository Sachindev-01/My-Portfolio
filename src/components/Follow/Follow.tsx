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
      className={`w-full lg:w-[80px] ${
        isHomePage
          ? "mt-12 pb-8 lg:mt-0 lg:pb-2 lg:fixed lg:-right-5 lg:bottom-4"
          : "fixed flex items-center justify-center top-24 lg:top-[570px] lg:fixed lg:right-0 lg:bottom-4"
      }`}
    >
      <div
        className={`${
          isHomePage
            ? "flex justify-center gap-1 lg:flex lg:flex-col lg:gap-[6px] lg:justify-center"
            : "flex lg:flex-col"
        } `}
      >
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
