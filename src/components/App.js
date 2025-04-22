import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100; // stop at 100
        }
        return prev + 10;
      });
    }, 1000); // Every 1 second

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div>
      {/* Do not remove the main div */}
      <div id="barOuter">
        <div id="barInner" style={{ width: `${progress}%` }}></div>
      </div>
      <p>{progress}%</p> {/* Cypress expects this format */}
    </div>
  );
};

export default App;
