import React from 'react';
import './App.css';
import SnapPanel,{snapLog} from "./components/SnapPanel";
import TimeLine from "./components/TimeLine";

const App: React.FC = () => {
  const [currentLog,setCurrentLog] = React.useState({
    
  })
  return (
    <div className="App">
      <header className="App-header">
      <TimeLine data={} ></TimeLine>
      <SnapPanel currentLog={currentLog as snapLog}  ></SnapPanel>
      </header>
    </div>
  );
}

export default App;
