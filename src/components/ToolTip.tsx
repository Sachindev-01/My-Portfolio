import { ReactNode, useState } from "react";

type ToolTipProps = {
  text: string;
  children: ReactNode;
};

const Tooltip = ({ text, children }: ToolTipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="relative inline-block">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
      {showTooltip && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white p-2 rounded z-50">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
