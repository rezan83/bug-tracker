import React, { useEffect, useState } from 'react';

function ScrollToTop() {
  const [ScrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    const scrollManager = () => {
      if (window.scrollY > window.screen.availHeight) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    };
    window.addEventListener('scroll', scrollManager);
    return () => {
      window.removeEventListener('scroll', scrollManager);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="scroll__btn">
      {ScrollToTop && (
        <button
          onClick={scrollUp}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            padding: 0,
            fontSize: '2rem'
          }}>
          ⬆️
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;
