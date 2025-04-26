import React from "react";
import { TrendingUp } from "lucide-react";
import Image from "next/image";

const avatars = [
  "/avatars/avatar1.svg",
  "/avatars/avatar2.svg",
  "/avatars/avatar3.svg",
  "/avatars/avatar4.svg",
  "/avatars/avatar5.svg",
];

function TotalFranchises() {
  return (
    <div className="bg-white rounded-xl shadow p-6 h-full">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-900">
        Total Franchisees Onboard
      </h2>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-gray-900">14</span>
          <span className="flex items-center text-xs text-green-600 border border-green-600 bg-white px-2 py-1 rounded-xl font-medium">
            <TrendingUp className="w-3 h-3 mr-1" />
            7.4%
          </span>
        </div>

        {/* Avatars */}
        <div className="flex -space-x-2 overflow-hidden">
          {avatars.slice(0, 5).map((src, index) => (
            <Image
              key={index}
              src={src}
              className="inline-block h-8 w-8 rounded-full object-cover"
              alt="Avatar"
              height={36}
              width={36}
            />
          ))}
          <div className="h-8 w-8 rounded-full bg-gray-200 text-xs font-medium text-gray-600 flex items-center justify-center ring-2 ring-white">
            +7
          </div>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="flex gap-1.5 mt-5 mb-4 ">
        <div
          className="h-2 bg-[#1f7eaa] rounded-full"
          style={{ flexGrow: 2 }}
        ></div>
        <div
          className="h-2 bg-[#30bdff] rounded-full"
          style={{ flexGrow: 7 }}
        ></div>
        <div
          className="h-2 bg-[#98deff] rounded-full"
          style={{ flexGrow: 5 }}
        ></div>
      </div>

      <div className="rounded-lg pt-4 text-sm text-gray-700 space-y-4 mt-2">
        {/* Stage 1 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#1f7eaa]"></span>
            Stage 1 (Initial Inquiry)
          </div>
          <span className="font-bold text-gray-900">02</span>
        </div>

        {/* Stage 2 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#30bdff]"></span>
            Stage 2 (Document Submission)
          </div>
          <span className="font-bold text-gray-900">07</span>
        </div>

        {/* Stage 3 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#98deff]"></span>
            Stage 3 (Training)
          </div>
          <span className="font-bold text-gray-900">05</span>
        </div>
      </div>
    </div>
  );
}

export default TotalFranchises;
