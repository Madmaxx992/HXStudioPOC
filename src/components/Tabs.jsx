import { useState } from "react";

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const _tabs = [
    "Visual Samples",
    "Case Studies",
    "Process Diagram & Artifacts",
    "Before After",
  ];
  return (
    <div className="w-4/5 translate-y-[40px] shadow-md">
      {/* First Container: Tabs */}
      <div className="flex bg-transparent rounded-t-lg overflow-hidden">
        {_tabs.map((tab, index) => (
          <div
            key={index}
            className={`px-4 py-2 cursor-pointer rounded-t-lg relative ${
              selectedTab === index
                ? "bg-white text-black"
                : "bg-transparent text-white"
            }`}
            onClick={() => setSelectedTab(index)}
          >
            {tab}
            {selectedTab === index && (
              <div className="absolute bottom-0 left-4 right-4 h-1 bg-[#FF0C0C]"></div>
            )}
          </div>
        ))}
      </div>

      {/* Second Container: Input Textbox */}
      <div className="bg-white p-4 rounded-b-lg -mt-1 rounded-md">
        <label htmlFor="keyword" className="text-black mb-2 block">
          Keyword
        </label>
        <div className="flex items-center rounded-md">
          <input
            type="text"
            id="keyword"
            className="border-none outline-none bg-transparent flex-grow text-black placeholder-gray-500"
            placeholder="Type your keyword here..."
          />
          <button className="bg-[#6C67E1] text-white px-4 py-2 rounded-md ml-2">
            Search Mockup
          </button>
        </div>
      </div>
    </div>
  );
};
export default Tabs;
