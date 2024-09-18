import React from 'react';
import newsData from './newsData'; // Import the mock news data

function NewsUpdate() {
    return (
        <div className="news-update">
            <h1>News Updates</h1>
            {newsData.length === 0 ? (
                <p>No updates available.</p>
            ) : (
                <ul>
                    {newsData.map((news) => (
                        <li key={news.id} className="news-item">
                            <h2>{news.title}</h2>
                            <p><strong>Date:</strong> {news.date}</p>
                            <div dangerouslySetInnerHTML={{ __html: news.body }} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default NewsUpdate;
