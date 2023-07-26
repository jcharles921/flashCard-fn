"use client";
import React, { useState } from "react";
import { LiaUserCircle } from "react-icons/lia";
import { Navigation } from "./navigation";

export default function Home() {
  const id: number = 1;

  interface actionProps {
    e: Element[];
  }
  const [action, setAction] = useState<number | null>(null);

  const openAction = (index: number) => {
    if (action === index) {
      return setAction(null);
    } else {
      return setAction(index);
    }
  };
  return (
    <body>
      <Navigation linkTo="/login" page="logout" />

      <main className="flex justify-center items-cente w-full mt-[100px]">
        <div className="grid gap-5 grid-cols-3 ">
          <div className="w-[338px] bg-white text-black h-[210px] rounded-md flex ">
            <a
              href={`/${id}`}
              className=" ml-8 w-[78%] cardInfo"
              onClick={() => {}}
            >
              <span className="flex flex-row text-xl">
                {" "}
                Geography
                <div
                  className=" ml-[40%]"
                  onClick={() => {
                    openAction(1);
                  }}
                >
                  ...
                </div>
              </span>
              <span> 24 items </span>
              <span className=" flex flex-row items-center">
                {" "}
                <LiaUserCircle className="text-black " />{" "}
                <p className="ml-2">John Doe</p>{" "}
              </span>
            </a>
            {action === 1 && (
              <div className="bg-white w-[50px] h-[30px] mt-[30px] rounded-md">
                <span className="text-green-600"> Edit</span>
                <span className="text-red-500"> Delete</span>
              </div>
            )}
          </div>
        </div>
      </main>
    </body>
  );
}
