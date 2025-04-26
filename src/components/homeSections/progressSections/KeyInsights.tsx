import Image from "next/image";
import React from "react";

function KeyInsights() {
  return (
    <div className="bg-white rounded-xl shadow p-6 h-full">
      <div className="flex justify-between items-start">
        <div className="w-full">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            Key Insights & Feedback
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold text-gray-900">10%</p>
              <p className="text-sm text-gray-500">Sales Growth</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/top-performer.svg"
                alt="Top Performer"
                className="w-10 h-10 rounded-full mb-2 object-cover"
                width={36}
                height={36}
              />
              <span className="text-xs text-[#269dd4] bg-[#eaf8ff] px-3 py-1 ring-1 rign-[#269dd4] rounded-full font-medium">
                Top Performer
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t my-4 border-gray-200"></div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-sm font-medium text-gray-800 mb-2">Feedback</p>
        <div className="flex items-start text-sm text-gray-700">
          <div className="w-2 h-2 mt-1.5 mr-2 bg-gray-300 rounded-full flex-shrink-0"></div>
          <p>Franchisees are requesting more detailed training materials.</p>
        </div>
      </div>
    </div>
  );
}

export default KeyInsights;
