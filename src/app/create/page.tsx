import React from "react";
import { Navigation } from "../navigation";
import { FcIdea } from "react-icons/fc";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

export default async function Create() {
  return (
    <body>
      <Navigation linkTo="/" page="Collection" />
      <main className="flex justify-center items-center w-full flex-col  mt-[50px]">
        <input className="input-text" type="text" placeholder="Add Title" />
        <div className="w-[720px] h-[375px] bg-white rounded-md flex flex-col justify-center items-center text-black">
          <span className="flex items-start w-full relative top-[-90px] left-[20px]  rounded-md">
            Add hint
            <FcIdea className="ml-[8px]" />
          </span>

          <span className="flex flex-row justify-around w-full ">
            <textarea
              placeholder="Add question"
              className=" placeholder:text-center  border border-primary rounded-md resize-none"
              id=""
              cols={20}
              rows={5}
            ></textarea>
            <textarea
              placeholder="Add response"
              className="placeholder:text-center  border border-primary rounded-md resize-none"
              id=""
              cols={20}
              rows={5}
            ></textarea>
          </span>
        </div>
        <div className="flex flex-row justify-center items-center mt-[20px] pagination">
          <BsArrowLeftCircle className="text-white text-4xl" />

          <span className="text-white text-lg ml-[20px]  mr-[20px]">1/24</span>

          <BsArrowRightCircle className="text-white text-4xl" />
        </div>
        <Button
          className="bg-primaryBlue text-white hover:bg-white mt-5 hover:text-primaryBlue"
          variant="contained"
        >
          {" "}
          Add card{" "}
        </Button>
        <Button
          className="bg-primaryBlue text-white hover:bg-white mt-5  mb-5 hover:text-primaryBlue"
          variant="contained"
        >
          {" "}
          Save collection{" "}
        </Button>
      </main>
    </body>
  );
}
