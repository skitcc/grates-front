
import React, { useEffect } from 'react';
import './BackgroundAnimation.css';

const BackgroundAnimation = () => {
  useEffect(() => {
    const fallingElementsContainer = document.getElementById('falling-elements-container');

    const createFallingElement = () => {
      const fallingElement = document.createElement('div');
      fallingElement.className = 'falling-element';
      fallingElement.style.left = `${Math.random() * 100}vw`;
      fallingElement.style.animationDuration = `${Math.random() * 2 + 1}s`; // случайная длительность анимации
      fallingElementsContainer.appendChild(fallingElement);
    };

    // создаем начальное количество падающих элементов
    for (let i = 0; i < 10; i++) {
      createFallingElement();
    }

    // добавляем событие для создания новых элементов каждую секунду
    const intervalId = setInterval(() => {
      createFallingElement();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="background-animation-container">
      <div id="falling-elements-container" className="falling-elements-container"></div>
    </div>
  );
};

export default BackgroundAnimation;