const Sidebar = ({ activeTab, setActiveTab }) => {
  const tabs = ["leads", "demo", "schedule"];

  return (
    <div className="w-1/6 bg-gray-900 p-6 flex flex-col gap-4 shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-white">Dashboard</h1>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`text-left px-4 py-2 rounded-lg font-medium transition-colors duration-200
            ${
              activeTab === tab
                ? "bg-blue-600 text-white shadow"
                : "hover:bg-gray-700 text-gray-300"
            }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
