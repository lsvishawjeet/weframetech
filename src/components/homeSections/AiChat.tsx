"use client"
import React, { useState } from 'react'
import { ArrowUp, CircleArrowUp, Send } from 'lucide-react'; 
import Image from 'next/image';

interface AiChat{
  isChatFullOpen: boolean,
  setIsChatFullOpened: (val:boolean)=>void;
}

function AiChat({isChatFullOpen, setIsChatFullOpened}:AiChat) {

  return (
    <div className="bg-white shadow p-6 flex flex-col items-center justify-center text-center h-full min-h-[250px] relative">
      <Image
        src="/ai-chat.svg"
        alt="AI Chat Assistant Logo"
        className="w-14 h-14 text-blue-500 mb-4"
        width={64}
        height={35.5}
      />
      

      <h2 className="text-xl font-semibold text-gray-800 mb-6 text-[30px]">
        Welcome to the AI Chat Assistant
      </h2>

      <button
        className="bg-[#e9eff6] w-7 h-7 flex items-center justify-center rounded-full absolute top-2 right-7"
        onClick={() => setIsChatFullOpened(!isChatFullOpen)}
      >
        {isChatFullOpen ? (
          <>
            <span className="-rotate-30 -translate-x-0.5 font-extrabold text-[#269dd4] text-xs">
              \
            </span>
            <span className="rotate-30 translate-x-0.5 font-extrabold text-[#269dd4] text-xs">
              /
            </span>
          </>
        ) : (
          <>
            <span className="rotate-30 -translate-x-0.5 font-extrabold text-[#269dd4] text-xs">
              /
            </span>
            <span className="-rotate-30 translate-x-0.5 font-extrabold text-[#269dd4] text-xs">
              \
            </span>
          </>
        )}
      </button>

      <div className="relative w-full max-w-3xl">
        <input
          type="text"
          placeholder="Ask your question here.."
          className="w-full p-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm"
        />
        <button name="send" className="absolute right-3 top-1/2 pl-4 pr-2 py-3 transform -translate-y-1/2 text-gray-400 hover:text-blue-500">
          <Send className="w-5 h-5" name='send'/>
        </button>
      </div>
    </div>
  );
}

export default AiChat