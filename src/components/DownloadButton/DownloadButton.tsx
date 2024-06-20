import { Link } from "react-router-dom";

const resumeUrl = import.meta.env.VITE_RESUME_URL as string;

const DownloadButton = () => {
  return (
    <Link
      to={resumeUrl}
      target="_blank"
      aria-label="Download My Resume"
      className="mt-6 border-2 border-blue-200 py-1 px-3 lg:py-2 lg:px-4 inline-block hover:bg-[#3f9eee] hover:border-[#3f9eee] hover:text-black hover:scale-105 transition duration-150 ease-in-out"
    >
      <button className="lg:text-lg px-2 -tracking-tighter">RESUME</button>
    </Link>
  );
};

export default DownloadButton;
