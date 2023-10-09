import { projects } from "../../utils/constant";
import SandwitchIcon from "../icons/SandwichIcon";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="py-44 px-2 lg:px-14">
      <div>
        <div className="flex gap-2 items-center">
          <SandwitchIcon />
          <h1 className="text-2xl lg:text-4xl text-[#d4e9fb] font-font-calibre">
            Projects
          </h1>
        </div>
        <div className="mt-12">
          {projects &&
            projects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                reverse={index % 2 !== 0}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
