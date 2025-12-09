import { useState, useEffect } from "react";

const TableSection = ({ activeTab, data, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Ensure currentData is always array
  const currentData = Array.isArray(data[activeTab])
    ? data[activeTab]
    : data[activeTab]?.data || [];

  const totalPages = Math.ceil(currentData.length / rowsPerPage);

  // 🟦 FIX: If currentPage becomes invalid (like after refresh), reset safely
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages || 1);
    }
  }, [currentData, totalPages]);

  // 🟦 FIX: When switching tabs → reset page to 1
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = currentData.slice(indexOfFirstRow, indexOfLastRow);

  const goToPage = (page) => {
    if (page < 1) return;
    if (page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="w-5/6 p-6 overflow-auto">
      <h2 className="text-2xl font-semibold mb-6 capitalize">{activeTab} Data</h2>

      {loading ? (
        <p className="text-gray-300">Loading {activeTab}...</p>
      ) : currentData.length === 0 ? (
        <p className="text-gray-300">No data available</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-700 rounded-lg">
              <thead className="bg-gray-800">
                <tr>
                  {Object.keys(currentData[0] || {}).map((key) => (
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
                {currentRows.map((item, idx) => (
                  <tr
                    key={item.id || idx}
                    className={idx % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
                  >
                    {Object.values(item || {}).map((val, idx2) => (
                      <td
                        key={idx2}
                        className="border-b border-gray-700 px-6 py-4 text-sm text-gray-200"
                      >
                        {Array.isArray(val)
                          ? val.join(", ")
                          : typeof val === "boolean"
                          ? val
                            ? "Yes"
                            : "No"
                          : val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <button
              className={`px-3 py-1 rounded ${
                currentPage === 1
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            <span>Page {currentPage} of {totalPages}</span>

            <button
              className={`px-3 py-1 rounded  ${
                currentPage === totalPages
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TableSection;
