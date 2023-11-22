"use-client";
import React, { PropsWithChildren } from "react";

const BgWrapper = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="container">
        {children}
        <img
          src="https://t3.ftcdn.net/jpg/05/00/55/46/360_F_500554623_Vzht9437IbAEkDQpyGcXu4JITSJKX2Lp.jpg"
          alt=""
        />
      </div>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default BgWrapper;
