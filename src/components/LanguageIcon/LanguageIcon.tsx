type LanguageIconProps = {
  name: string;
  icon: JSX.Element;
  color: string;
};

const LanguageIcon = ({ name, icon, color }: LanguageIconProps) => {
  return (
    <div
      style={{ color: color }}
      className={`w-[100px] lg:w-[150px] flex flex-col items-center justify-center gap-2 p-4 bg-gray-800 rounded-md hover:scale-110 transition duration-150 ease-in-out cursor-pointer`}
    >
      <p className="text-6xl lg:text-7xl">{icon}</p>
      <strong className="text-sm font-font-nunito capitalize">{name}</strong>
    </div>
  );
};

export default LanguageIcon;
