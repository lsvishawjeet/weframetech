"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useStore } from "@/store/store";
import { AlignJustify } from "lucide-react";

function Sidebar() {
  const sideBarItems = [
    "Home",
    "Stages & Checklist",
    "Upload Docs",
    "Preferred Vendors",
    "Tech Stack",
    "Targets",
    "Zee Sales Targets",
    "MAI Settings",
    "Pending Questions",
  ];

  const activeItem = "Home";

  const {isSideBarOpen, setSideBarOpen, setSideBarClose} = useStore()

  return (
    <>
      {/* for large devices */}
      <div className="bg-[#175c7b] h-screen w-64 flex-col justify-between py-6 px-4 hidden relative sm:flex ">
        <div className="flex flex-col gap-1 pt-9">
          {sideBarItems.map((item, index) => {
            const isActive = item === activeItem;

            return (
              <div
                key={index}
                className="relative"
              >
                <button
                  className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium ${
                    isActive
                      ? "bg-[#134d66] text-[#2fbcfd] "
                      : "text-[#9bb4bf] hover:bg-[#134d66] hover:text-white"
                  }`}
                >
                  {item}
                </button>

                {item === "Pending Questions" && (
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#9bb4bf] text-[#175c7b] text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {"3"}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <button className="px-4 py-2 text-[#9bb4bf] text-sm hover:text-white cursor-pointer w-full text-left">
          Logout
        </button>
      </div>

      {/* for small devices */}
      {isSideBarOpen && (
        <div
          className="bg-[#175c7b] h-screen w-64 flex-col justify-between px-4 sm:hidden flex absolute z-50"
        >
          <div className="flex flex-col gap-1 pt-5 relative">
           <button className='md:hidden flex top-0 ml-2 mb-4' onClick={()=>setSideBarClose()}><AlignJustify stroke="#9bb4bf"/></button>
            {sideBarItems.map((item, index) => {
              const isActive = item === activeItem;

              return (
                <div key={index} className="relative">
                  <button
                    className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium ${
                      isActive
                        ? "bg-[#134d66] text-[#2fbcfd] "
                        : "text-[#9bb4bf] hover:bg-[#134d66] hover:text-white"
                    }`}
                  >
                    {item}
                  </button>

                  {item === "Pending Questions" && (
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#9bb4bf] text-[#175c7b] text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                      {"3"}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <button className="px-4 py-2 text-[#9bb4bf] text-sm hover:text-white cursor-pointer w-full text-left">
            Logout
          </button>
        </div>
      )}
    </>
  );
}

export default Sidebar;
