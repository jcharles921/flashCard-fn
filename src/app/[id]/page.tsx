"use client";
import React, { useState } from "react";
import { Navigation } from "../navigation";
import { FcIdea } from "react-icons/fc";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

export default function Page() {
  const [fliped, setFliped] = useState(false);

  return (
    <body>
      <Navigation linkTo="/" page="Collection" />
      <main className="flex justify-center items-center w-full flex-col  mt-[100px]">
        <div
          className={`w-[720px] h-[375px] bg-white rounded-md flex justify-center items-center text-black toflip ${
            fliped ? "fliped" : ""
          }`}
          onClick={() => {
            setFliped(!fliped);
          }}
        >
          <div className="absolute top-[200px] left-[380px] flex flex-row">
            Get a hint
            <FcIdea className="ml-[8px]" />
          </div>

          {!fliped && (
            <span className="text-2xl front-card">
              What is Elliptic Curve Cryptography ?
            </span>
          )}
          {fliped && (
            <div>
              <span className=" text-2xl flex justify-center items-center back-card ">
                <textarea
                  rows={8}
                  cols={30}
                  className="resize-none text-center mt-[15px]"
                >
                  Asymmetric encryption with Elliptic Curve Cryptography (ECC)
                  employs mathematical curves instead of large integers,
                  allowing for smaller keys and reduced computational overhead.
                  This makes ECC ideal for mobile devices, as it demands less
                  storage and transmission requirements while maintaining robust
                  security.
                </textarea>
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-row justify-center items-center mt-[20px] pagination">
          <BsArrowLeftCircle className="text-white text-4xl" />

          <span className="text-white text-lg ml-[20px]  mr-[20px]">1/24</span>

          <BsArrowRightCircle className="text-white text-4xl" />
        </div>
      </main>
    </body>
  );
}
