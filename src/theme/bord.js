import React, { useEffect, useState } from 'react';

function App() {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    // הוספת מאזין לשינויי גודל החלון
    window.addEventListener('resize', handleResize);

    // להסרת המאזן בעת הפסקת הרכיב
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <p>רוחב המסך: {windowSize.width} פיקסלים</p>
      <p>גובה המסך: {windowSize.height} פיקסלים</p>
    </div>
  );
}

export default App;