import React from 'react';
import dayjs from 'dayjs';

function formatDate(dateString) {
  return `${dayjs(dateString).format('MMMM D, YYYY')}`;
}

function News({ newsData }) {
  newsData = newsData.sort((a, b) => Date.parse(b.PostDate) - Date.parse(a.PostDate));
  return (
    <div className="page">
      <h1 className="page-header"> News</h1>

      <section className="card">
        <div className="schedule-grid">
          {newsData ? (
            newsData.map((news, index) => {
              const { Title, PostDate, Body } = news;
              return (
                <div key={index} className="event-row event-row-schedule fs-400">
                  <p>{Title}</p>
                  <p>{formatDate(PostDate)}</p>
                  <p>{Body}</p>
                </div>
              );
            })
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </section>
    </div>
  );
}

export default News;
