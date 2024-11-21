import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";

const Home = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <main
      className={`min-h-screen w-full ${
        theme === "dark" ? "bg-[#14110F]" : "bg-[#F3F3F4]"
      }`}
    >
      <Header />
    </main>
  );
};

export default Home;
