import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import TableSection from "./TableSection";

const Dashboard = () => {
  // Load active tab from localStorage, default to 'leads'
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("activeTab") || "leads";
  });

  const [data, setData] = useState({ leads: [], demos: [], schedule: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch data from API
  const fetchData = async (tab) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://forms.bteam11.com/api/${tab}`);
      const result = await response.json();
      const tabData = result.data || [];
      setData((prev) => ({ ...prev, [tab]: tabData }));
    } catch (err) {
      console.error(`Error fetching ${tab}:`, err);
      setError(`Failed to load ${tab} data`);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data whenever activeTab changes
  useEffect(() => {
    fetchData(activeTab);
    // Save activeTab to localStorage
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <TableSection activeTab={activeTab} data={data} loading={loading} error={error} />
    </div>
  );
};

export default Dashboard;
