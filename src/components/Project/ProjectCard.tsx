import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import Tooltip from "../ToolTip";

type StackList = {
  icon: JSX.Element;
  color: string;
  iconName: string;
};

type Project = {
  name: string;
  image: string;
  keyFeatures: string[];
  github_url: string;
  site_url: string;
  stack: StackList[];
};

type ProjectCardProps = {
  project: Project;
  reverse: boolean;
};

const ProjectCard = ({ project, reverse }: ProjectCardProps) => {
  const { name, image, keyFeatures, github_url, site_url, stack } = project;

  return (
    <div
      className={`flex flex-col lg:flex-row flex-wrap ${
        reverse ? "lg:flex-row-reverse" : ""
      } justify-between gap-8 mb-28`}
    >
      <div className="flex-1 px-2">
        <Tilt className=" shadow-card lg:h-72 ">
          <img
            src={image}
            alt="a adorable dog"
            className="h-full w-full object-cover rounded-md"
          />
        </Tilt>
      </div>
      <div className="flex-1">
        <strong className="text-2xl text-[#d4e9fb] font-font-calibre">
          {name}
        </strong>
        <div className="flex items-center gap-3 mt-3">
          <Link
            to={site_url}
            target="_blank"
            className="text-xl text-[#3f9eee] hover:scale-150 transition duration-150 ease-in-out"
          >
            <FaExternalLinkAlt />
          </Link>
          <Link
            to={github_url}
            target="_blank"
            className="text-xl text-[#3f9eee] hover:scale-150 transition duration-150 ease-in-out"
          >
            <FaGithub />
          </Link>
        </div>
        <div className="mt-3">
          <label className="text-[#d4e9fb] font-font-calibre">
            Key features :
          </label>
          <ul className="mt-2 font-font-nunito list-disc pl-4">
            {keyFeatures?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="mt-3">
          <h2 className="text-[#d4e9fb] font-font-calibre">
            Tech stack used :
          </h2>
          <div className="flex items-center gap-4 mt-3">
            {stack.map((stackItem, index) => (
              <Tooltip key={index} text={stackItem.iconName}>
                <p
                  key={index}
                  style={{ color: `${stackItem.color}` }}
                  className={`text-4xl hover:scale-125 transition duration-150 ease-in-out cursor-pointer`}
                >
                  {stackItem.icon}
                </p>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
