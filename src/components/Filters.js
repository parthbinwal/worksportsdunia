import React, { useState } from 'react';

const Filter = ({ onSearch }) => {
  const [filters, setFilters] = useState({ author: '', type: '', date: '' });

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search by Author"
        onChange={(e) => setFilters({ ...filters, author: e.target.value })}
        className="border rounded p-2"
      />
      <button onClick={handleSearch} className="ml-2 bg-blue-500 text-white p-2 rounded">
        Search
      </button>
    </div>
  );
};

export default Filter;