const DownloadButton = () => {
  return (
    <a
      download="SachinResume"
      href="/src/assets/SachinResume.pdf"
      target="_blank"
      aria-label="Download My Resume"
      className="mt-6 border-2 border-blue-200 py-1 px-3 lg:py-2 lg:px-4 inline-block hover:bg-[#3f9eee] hover:border-[#3f9eee] hover:text-black hover:scale-105 transition duration-150 ease-in-out"
    >
      <button className="lg:text-lg">Download Resume</button>
    </a>
  );
};

export default DownloadButton;
