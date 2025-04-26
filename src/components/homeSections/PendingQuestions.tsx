import React from "react";
import { ChevronUp } from "lucide-react";
import Image from "next/image";

const questions = [
  {
    name: "Phoenix Baker",
    username: "@phoenix",
    avatar: "/avatars/avatar2.svg",
    time: "5min ago",
    question: "What are the requirements for opening a new store?",
  },
  {
    name: "Koray Okumus",
    username: "@koray",
    avatar: "/avatars/koray.svg",
    time: "4hr ago",
    question: "How do I manage inventory effectively?",
  },
];

function PendingQuestions() {
  const questionCount = "02";

  return (
    <div className="bg-white shadow  h-full min-h-[250px] flex flex-col">
      <div className="flex justify-between items-center mb-4 border-b-2 px-6 py-3 border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          Pending Questions
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#ffffff] bg-[#30bdff] px-2.5 py-1 rounded-md">
            {questionCount}
          </span>
        </div>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto pr-2">
        {questions.map((q, index) => (
          <div
            key={index}
            className="flex gap-3 items-start border-b border-gray-100 pb-3 last:border-b-0 px-3"
          >
            <div className="w-2 h-2 bg-[#30bdff] translate-y-2 rounded-full mt-1.5 flex-shrink-0"></div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <div className="relative flex">
                  <Image
                    src={q.avatar}
                    alt={q.name}
                    className="w-8 h-8 rounded-full object-cover"
                    height={40}
                    width={40}
                  />
                  <div className="w-2 h-2 absolute right-0 bottom-0 -translate-x-0.5 -translate-y-0.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">{q.name}</p>
                  <p className="text-gray-500 text-xs">{q.username}</p>
                </div>
                <span className="text-gray-400 text-xs ml-auto">{q.time}</span>
              </div>
              <p className="text-gray-700 text-sm">{q.question}</p>
            </div>
          </div>
        ))}
        {questions.length === 0 && (
          <p className="text-sm text-gray-500 text-center py-4">
            No pending questions.
          </p>
        )}
      </div>
    </div>
  );
}

export default PendingQuestions;
