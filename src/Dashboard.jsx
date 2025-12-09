import { useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("leads");

  const data = {
    leads: [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
    ],
    demos: [
      { id: 1, title: "Demo 1", date: "2025-12-10" },
      { id: 2, title: "Demo 2", date: "2025-12-12" },
    ],
    schedule: [
      { id: 1, task: "Call Client", time: "10:00 AM" },
      { id: 2, task: "Team Meeting", time: "2:00 PM" },
    ],
  };

  const tabs = ["leads", "demos", "schedule"];

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-900 p-6 flex flex-col gap-4 shadow-lg">
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

      {/* Table Section */}
      <div className="w-3/4 p-6 overflow-auto">
        <h2 className="text-2xl font-semibold mb-6 capitalize">{activeTab} Data</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-700 rounded-lg">
            <thead className="bg-gray-800">
              <tr>
                {Object.keys(data[activeTab][0] || {}).map((key) => (
                  <th
                    key={key}
                    className="border-b border-gray-700 px-6 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider"
                  >
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data[activeTab].map((item, idx) => (
                <tr
                  key={item.id}
                  className={idx % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
                >
                  {Object.values(item).map((val, idx2) => (
                    <td
                      key={idx2}
                      className="border-b border-gray-700 px-6 py-4 text-sm text-gray-200"
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
