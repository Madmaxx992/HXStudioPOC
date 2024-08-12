
const Tabs = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className="relative">
      <div className="absolute top-8" style={{ left: "4.5rem" }}>
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm font-medium text-gray-900 ${
              activeTab === index ? "bg-white shadow" : "hover:bg-gray-100"
            }`}
            onClick={() => onTabClick(index)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
