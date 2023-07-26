import React, { FC } from "react";
import { FaUser } from "react-icons/fa";

interface NavigationProps {
  linkTo: string;
  page: string;
}

export const Navigation: FC<NavigationProps> = ({ linkTo, page }) => {
  return (
    <div className="bg-primaryBlue h-[70px] flex flex-row justify-between">
      <div className="ml-8 flex items-center text-4xl logo">Memo</div>
      <div className="flex flex-row items-center justify-around">
        <a className="logo text-lg mr-8" href={linkTo}>
          {page}
        </a>
        <span className="rounded-full flex items-center justify-center bg-white w-[30px] h-[30px] mr-6">
          <FaUser className="text-black" />
        </span>
      </div>
    </div>
  );
};
