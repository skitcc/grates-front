import React, { useState } from 'react';
import './MainPage.css';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../features/auth/authSlice';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
const MainPage = () => {
  const [likes, setLikes] = useState({})
  const [dislikes, setDislikes] = useState({})
  const user = useSelector(selectCurrentUser)
  const newsData = [
    {
      id: 1,
      author: `${user}`,
      title: 'Новость 1: Важное событие',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac dui id velit cursus ultrices.',
      date: '2023-12-22',
    },
    {

      id: 2,
      author: `${user}`,
      title: 'Новость 2: Заголовок новости',
      content:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      date: '2023-12-21',
    },
    {
      id: 3,
      author: `${user}`,
      title: 'Новость 3: Новое обновление приложения',
      content:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      date: '2023-12-20',
    },
    // Добавьте больше новостей по необходимости
  ];
  const handleLike = (postId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: (prevLikes[postId] || 0) + 1,
    }));
  };

  const handleDislike = (postId) => {
    setDislikes((prevDislikes) => ({
      ...prevDislikes,
      [postId]: (prevDislikes[postId] || 0) + 1,
    }));
  };

  return (
    <div className="news-container">
      <div className="menu">
        <h2>Меню</h2>
        {/* Добавьте элементы меню по необходимости */}
      </div>
      <div className="news-feed">
        {newsData.map((news) => (
          <div className="news-item" key={news.id}>
            <h3>{news.title}</h3>
            <p>{news.content}</p>
            <div className="news-info">
              <span className="news-date">{formatDate(news.date)}</span>
              <div className="likes-dislikes">
                <button onClick={() => handleLike(news.id)}>
                  <FaThumbsUp />
                </button>
                {likes[news.id] && <span className="like-count">{likes[news.id]}</span>}
                <button onClick={() => handleDislike(news.id)}>
                  <FaThumbsDown />
                </button>
                {dislikes[news.id] && (
                  <span className="dislike-count">{dislikes[news.id]}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export default MainPage;
