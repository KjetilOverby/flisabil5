import React from "react";

const Bilsalg = () => {
  return (
    <>
      <div className="main-container">
        <div className="px-16">
          <h1 className="text-5xl text-slate-500">Bilsalg</h1>
          <p className="text-slate-500 mt-10 text-xl">
            Ta en kikk på våre biler, vi har et bredt utvalg og mange
            prisklasser. Vi tar gjerne i mot innbytte, vi kan også betale et
            passende mellomlegg i eventuellt dyrere bil.
          </p>
        </div>
        <div>
          <img
            className="w-full"
            src="https://www.usnews.com/object/image/00000188-3537-d69c-a78d-75f7aef90000/gettyimages-1147253075.jpg?update-time=1684520021526&size=responsive640"
            alt=""
          />
        </div>
      </div>
      <style>
        {`
         .main-container {
            margin: 15rem 55rem;
            display: grid;
            grid-template-columns: 35rem 1fr
         }
        `}
      </style>
    </>
  );
};

export default Bilsalg;
