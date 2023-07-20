import React from "react";
import { Navigation } from "../navigation";
import { FcIdea } from "react-icons/fc";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

export default function Page() {
  return (
    <body>
      <Navigation linkTo="/" page="Components" />
      <main className="flex justify-center items-center w-full flex-col  mt-[100px]">
        <div className="w-[720px] h-[375px] bg-white rounded-md flex justify-center items-center text-black ">
          <div className="absolute top-[200px] left-[380px] flex flex-row">
            Get a hint
            <FcIdea className="ml-[8px]" />
          </div>

          <span className="text-2xl">
            What is Elliptic Curve Cryptography ?
          </span>
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
