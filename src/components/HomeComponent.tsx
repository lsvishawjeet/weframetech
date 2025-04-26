"use client";
import React, { useState } from 'react';
import AiChat from "@/components/homeSections/AiChat";
import PendingQuestions from "@/components/homeSections/PendingQuestions";
import AccountProgress from './homeSections/progressSections/AccountProgress';
import FinancialWellbeing from './homeSections/progressSections/FinancialWellbeing';
import KeyInsights from './homeSections/progressSections/KeyInsights';
import ProspectLeads from './homeSections/progressSections/ProspectLeads';
import TotalFranchises from './homeSections/progressSections/TotalFranchises';

function HomeComponent() {
    const [isChatFullOpen, setIsChatFullOpened] = useState(false);

    return (
        <div 
        className="flex-1 overflow-x-hidden overflow-y-auto">
            {/* Top Section */}
            <div
                className={`transition-all duration-800 ease-in-out ${
                    isChatFullOpen ? "opacity-0 h-0 overflow-hidden" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-2 items-stretch p-6"
                }`}
            >
                <div className="col-span-1">
                    <AccountProgress />
                </div>
                <div className="col-span-1 flex flex-col gap-6">
                    <TotalFranchises />
                    <FinancialWellbeing />
                </div>
                <div className="col-span-1 flex flex-col gap-6">
                    <KeyInsights />
                    <ProspectLeads />
                </div>
            </div>

            {/* Bottom Section */}
            <div
                className={`grid grid-cols-1 lg:grid-cols-3 border-t-2 border-gray-200 transition-all duration-800 ease-linear ${
                    isChatFullOpen ? "h-full" : "h-auto"
                }`}
            >
                <div className="lg:col-span-1">
                    <PendingQuestions />
                </div>
                <div className="lg:col-span-2">
                    <AiChat isChatFullOpen={isChatFullOpen} setIsChatFullOpened={setIsChatFullOpened} />
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;
