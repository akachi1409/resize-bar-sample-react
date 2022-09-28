import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import KeywordTool from './features/keyword_tool/KeywordTool';
import { WidthAndHeight } from './services/interfaces';

function App() {

  const [width, setWidth]   = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
  }
  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);  // [] ensure it's just once invoked during start

  const styles: { [key: string]: React.CSSProperties } = {
    app : {
      overflow: 'hidden',
      height: height,
      width: width
    }
  }

  return (
    <div className="App" style={styles.app}>
      <header className="App-header">
      </header>
      <KeywordTool width={width} height={height} />  {/** <-------------- Here inside the job */}
    </div>
  );
}

export default App;
