import React from 'react';

const NewsList = ({ news }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    {news.map((article, idx) => (
      <div key={idx} className="border rounded p-4">
        <h3 className="font-bold">{article.title}</h3>
        <p>{article.author || 'Unknown Author'}</p>
        <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
      </div>
    ))}
  </div>
);

export default NewsList;