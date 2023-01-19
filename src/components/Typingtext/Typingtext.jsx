import React, { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const [texts, setTexts] = useState(['Chatbot', 'Image generator', 'Coding Assist']);
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setCurrentText(currentText => {
        if (currentText.length < texts[textIndex].length) {
          return currentText + texts[textIndex][currentText.length];
        } else {
          setTextIndex(textIndex => (textIndex + 1) % texts.length);
          return '';
        }
      });
    }, 150);
    return () => clearInterval(typingInterval);
  }, [texts, textIndex]);

  return (
    <div>
      <p>Here you can get ai <span className='fw-bold'>{currentText}| </span></p>
    </div>
  );
};

export default TypingAnimation;
