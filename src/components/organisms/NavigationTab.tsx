"use client";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

const tabList = [
  { label: "Profile" },
  { label: "History" },
  { label: "Skillset" },
  { label: "Work" },
];

interface NavigationTabProps {
  tabValue: number;
  tabChange: (event: React.SyntheticEvent, value: number) => void;
}

const NavigationTab = ({ tabValue, tabChange }: NavigationTabProps) => {
  return (
    <div className="flex space-x-4">
      {tabList.map((tab, idx) => (
        <button
          key={tab.label}
          className={`
            text-sm md:text-md px-4 py-2 rounded-t-lg font-bold
            ${
              tabValue === idx
                ? "bg-green-200 text-black shadow"
                : "bg-gray-200 text-gray-700 hover:bg-green-100"
            }
            transition
          `}
          onClick={(e) => {
            tabChange(e, idx);
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default NavigationTab;
