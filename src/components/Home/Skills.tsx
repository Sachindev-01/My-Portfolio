import { languages } from "../../utils/constant";

const Skills = () => {
  return (
    <section className="w-full mt-44">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
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

        <div className="mt-10 flex justify-center flex-wrap gap-2 lg:gap-6 text-center">
          {languages.map(({ name, icon, color }) => (
            <div key={name} style={{color: color}} className={`w-[100px] lg:w-[150px] flex flex-col items-center justify-center gap-2 p-4 bg-gray-800 rounded-md hover:scale-110 transition duration-150 ease-in-out cursor-pointer`}>
              <p className="text-6xl lg:text-7xl">{icon}</p>
              <strong className="text-sm font-font-nunito capitalize">{name}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;