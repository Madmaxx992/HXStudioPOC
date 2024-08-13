const Tabs = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className="relative">
      <div className="flex flex-row absolute top-8 w-full">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`px-6 py-2 whitespace-nowrap font-medium ${
              activeTab === index
                ? "bg-white text-black shadow"
                : "bg-transparent text-white"
            } hover:bg-gray-100 hover:text-black`}
            onClick={() => onTabClick(index)}
            style={{
              minWidth: "260px",
              textAlign: "center",
              backgroundColor: activeTab === index ? "white" : "transparent",
              color: activeTab === index ? "black" : "white",
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Tabs;
