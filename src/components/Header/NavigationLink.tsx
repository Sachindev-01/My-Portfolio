import { NavLink, useLocation } from "react-router-dom";

type HandleToggle = ((value: boolean) => void) | undefined;

type NavigationProps = {
  urlName: string;
  url: string;
  handleToggle?: HandleToggle;
};

const NavigationLink = ({ urlName, url, handleToggle }: NavigationProps) => {
  const location = useLocation();

  function handleOnClick() {
    if (handleToggle !== undefined) handleToggle(false);
  }

  function pathMatchRoute(route: string) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <NavLink
      to={url}
      onClick={handleOnClick}
      className={`w-[100px] text-center font-font-calibre ml-4 px-4 py-2 lg:p-4 text-[#fff] text-lg capitalize lg:text-xl  hover:bg-[#113b5e] transition duration-150 ease-in-out border-t-[.5px] border-[#3f9eee] lg:border-t-[0px] lg:ml-0 lg:text-center lg:hover:bg-transparent lg:hover:border-b-[.5px] lg:border-[#3f9eee] lg:w-auto lg:hover:text-[#3f9eee] ${
        pathMatchRoute(url) && "lg:border-b-2 lg:border-[#3f9eee]"
      }`}
    >
      {urlName}
    </NavLink>
  );
};

export default NavigationLink;
