"use client";

import { useTheme } from "next-themes";

const Arrow_Icon = () => {
  const { theme } = useTheme();

  return (
    <svg width="12" height="12" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 16.5V0.5H0V2.5H13L0 15.5L1 16.5L14 3.5V16.5H16ZM16 0.5H13V3.5H16V0.5Z"
        fill={`
                    ${theme === "light" ? "#000000" : "#868686"}
                  `}
      />
    </svg>
  );
};

export default Arrow_Icon;
