import './App.css';
import React from "react";
import ReactPlayer from "react-player/youtube";

const App = () => {
  return (
    <div>
      <p>
      <MyVideo />
      </p>
    </div>
  );
};

const MyVideo = () => {
  return (
    <ReactPlayer url='https://youtu.be/LYafM5LHQ_Q?si=Me-M8z_K5p1VMlNc' />
  );
};

export default App;
