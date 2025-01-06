import React, { useState, useEffect } from 'react';
import { fetchNews } from '../utils/api';
import Filters from '../components/Filters';
import NewsList from '../components/NewsList';
import Analytics from '../components/Analytics';
import { exportPDF, exportCSV } from '../utils/export';
import ProtectedPage from './ProtectedPage';

const Dashboard = () => {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    fetchNews().then((data) => {
      setNews(data);
      setFilteredNews(data);
    });
  }, []);

  const handleSearch = (filters) => {
    const results = news.filter((item) =>
      item.author?.toLowerCase().includes(filters.author.toLowerCase())
    );
    setFilteredNews(results);
  };

  return (
    <ProtectedPage>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Filters onSearch={handleSearch} />
        <button onClick={() => exportPDF(filteredNews)}>Export PDF</button>
        <button onClick={() => exportCSV(filteredNews)}>Export CSV</button>
        <NewsList news={filteredNews} />
        <Analytics data={filteredNews} />
      </div>
    </ProtectedPage>
  );
};

export default Dashboard;
