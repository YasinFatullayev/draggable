import React from 'react';
import Draggable from './draggable';
import './App.css';
import CanvasMaker from './canvasCreate';

function App() {
  return (

    <div className="App">
      <CanvasMaker canvasItem={<Draggable />}/>
        {/* <Draggable /> */}
    </div>
  );
}

export default App;
