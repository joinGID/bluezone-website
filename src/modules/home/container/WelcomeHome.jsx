import React from "react";
import WelcomeText from "../components/welcomehome/WelcomeText";

function WelcomeHome() {
  return (

    <div className="bg-[#f9f6f3]">
      <div className="flex justify-center md:grid md:grid-cols-3 md:gap-4">
        <div className="hidden md:block"></div>

        <div className="flex justify-center">
          <WelcomeText />
        </div>

        <div className="hidden md:block"></div>
      </div>
    </div>
  );
}

export default WelcomeHome;
