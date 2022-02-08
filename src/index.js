import react from 'react';
import reactDom from 'react-dom';
import CanvasComponent from './CanvasComponent';
import './index.css';

const points = [
  {x:1,y:1,connection:[1,2,3]},
  {x:5,y:1,connection:[0,1,2]},
  {x:1,y: 5,connection:[0]},
  {x:10,y: 5,connection:[0,1,2]},
]

const App = () =>{

  return (
    <div>
        <CanvasComponent graphPoints={points} />
    </div>
    )
}

reactDom.render(<App />,document.getElementById("root"));
