import React from "react";
import BgWrapper from "./BgWrapper";
const bg = "../../assets/_5b12ef00-2775-4e6c-978f-6f8a1ec413ad.jpeg";

const Topcontent = () => {
  return (
    <>
      <div className="bg-image flex justify-center items-center">
        <div>
          <h1 className="text-7xl text-white">VELKOMMEN TIL FLISA BIL</h1>
          <p className="text-gray-200 mt-5">
            Alt innen bil. Etablert 1985, her er det trygt å handle.
          </p>
          <button className="mt-6 bg-white p-2 rounded-xl">BRUKTBILER</button>
        </div>
      </div>
      <style>
        {`
        .bg-image {
            background: linear-gradient(rgba(0,128,128,.9), rgba(40,28,128,.7)) ,url('https://lh3.googleusercontent.com/pw/ADCreHewIUp6sj464HRt9ITzO7upCNHU3lZe9wO_uQltUWNRtDpAwljauweXdVTFiAUmyAqOmrglXAVgOP5KkTHCB8XagrZXh_RK3bMSz61DyPQ8ishAJD1OXly06Z41gEpqyC4yrHb9xUGjHVN-C-lmTzL5=w1920-h696-s-no?authuser=0');
            height: 97vh;
            background-repeat: no-repeat;
            background-size: cover;
            width: 100vw;
            background-position: center;
        }
        `}
      </style>
    </>
  );
};

export default Topcontent;
