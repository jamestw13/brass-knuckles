import React from 'react';
import dayjs from 'dayjs';

function formatDate(dateString) {
  return `${dayjs(dateString).format('MMMM D, YYYY')}`;
}

function News({ newsData }) {
  newsData = newsData?.sort((a, b) => Date.parse(b.PostDate) - Date.parse(a.PostDate));
  return (
    <div className="page">
      <h1 className="page-header"> News</h1>

      <section className="card">
        <div>
          {newsData ? (
            newsData.map((news, index) => {
              const { Title, PostDate, Body } = news;
              return (
                <div key={index} className="news-item m-1">
                  <h3 className="news-title">{Title}</h3>
                  <h4>{formatDate(PostDate)}</h4>
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
