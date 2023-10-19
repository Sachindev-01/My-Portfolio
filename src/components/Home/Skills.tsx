import { languages } from "../../utils/constant";
import LanguageIcon from "../LanguageIcon/LanguageIcon";

const Skills = () => {
  return (
    <section className="w-full mt-32 md:44">
      <div className="max-w-7xl mx-auto px-1 lg:px-12">
        <div className="flex gap-2 items-center justify-center before:border-t before:flex-1 before:border-gray-500 after:border-t after:flex-1 after:border-gray-500">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 384 512"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#3f9eee] w-[1.5em] lg:w-[1.7em]"
          >
            <path d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"></path>
          </svg>
          <strong className=" text-2xl lg:text-4xl text-[#d4e9fb] font-font-calibre">
            My Skills
          </strong>
        </div>
        <div className="mt-10 flex justify-center flex-wrap gap-3 lg:gap-6 text-center">
          {languages.map(({ name, icon, color }) => (
            <LanguageIcon key={name} name={name} icon={icon} color={color} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
