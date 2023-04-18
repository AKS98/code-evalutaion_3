import React, { useState } from "react";
import { BiDollar, BiDockTop, BiHelpCircle } from "react-icons/bi";
import { CgMicrosoft } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  const [navSelected, setNavSelected] = useState(0);
  const handleNavClick = (index) => {
    setNavSelected(index);
  };
  return (
    <div className="bg-black w-full h-[5rem] text-white text-xl">
      <div className="max-w-[90%] flex justify-between items-center px-4 py-2 mx-auto h-full">
        <ItemContainer gap={"gap-2"}>
          <div className="font-medium">Grave Sites Managment</div>
        </ItemContainer>
        <ItemContainer gap={"gap-3"}>
          {headerData?.map((item, index) => {
            return (
              <div
                className={`hidden xl:flex items-center flex-1 gap-2 rounded-[1.3rem] hover:bg-gray-500 px-5 py-3 cursor-pointer text-lg ${
                  navSelected === index ? "bg-gray-500" : ""
                } `}
                onClick={() => handleNavClick(index)}
              >
                {item.icon}
                <div>{item.label}</div>
              </div>
            );
          })}
        </ItemContainer>
        <div className="hidden xl:flex">
          <ItemContainer gap={"gap-6"}>
            <ItemContainer gap={"gap-4"}>
              <BsSearch className="text-[1.5rem]" />
              <AiOutlineSetting className="text-[1.5rem]" />
              <BiHelpCircle className="text-[1.5rem]" />
            </ItemContainer>
            <div className="flex gap-3 items-center">
              <div className="bg-green-700 rounded-[50%] p-[0.35rem] w-[2.5rem] text-center">
                JS
              </div>
              <div className="flex flex-col">
                <div className="text-lg">John Snow</div>
                <div className="text-sm text-gray-400">
                  Municipality Officer
                </div>
              </div>
              <RiArrowDropDownLine />
            </div>
          </ItemContainer>
        </div>
      </div>
    </div>
  );
};

export default Header;

const headerData = [
  {
    icon: <CgMicrosoft size={20} />,
    label: "Maintain",
  },
  {
    icon: <BiDollar size={20} />,
    label: "Payments",
  },
  {
    icon: <BiDockTop size={20} />,
    label: "Reports",
  },
];

const ItemContainer = ({ children, gap }) => {
  return (
    <div className={`flex justify-start items-center ${gap ? gap : "gap-2"}`}>
      {children}
    </div>
  );
};
