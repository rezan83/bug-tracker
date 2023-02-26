import React, { useEffect, useState } from 'react';

function ScrollToTop() {
  const [ScrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
        console.log(window.screen.availHeight)
      if (window.scrollY > window.screen.availHeight) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    });
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
