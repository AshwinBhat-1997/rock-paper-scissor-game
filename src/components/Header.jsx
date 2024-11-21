import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <header className="h-[10vh] w-full bg-transparent flex items-center justify-between px-5">
      <h1
        className={`text-2xl md:text-3xl font-bold ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        Rock Paper Scissor
      </h1>
    </header>
  );
};

export default Header;
