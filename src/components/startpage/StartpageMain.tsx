import React from "react";
import Bilsalg from "./Bilsalg";
import Topcontent from "./Topcontent";

const StartpageMain = () => {
  return (
    <div>
      <div className="h-screen flex justify-center">
        <Topcontent />
      </div>
      <Bilsalg />
    </div>
  );
};

export default StartpageMain;
