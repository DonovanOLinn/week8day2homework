import './css/App.css';
import Navbar from './components/navbar';
import React, {useState} from 'react';

function App() {

  const [count, setCount] = useState(0);
  const changeCounter = () => {
    console.log(count)
    setCount(count + 1);
  }



  return (
    <div className="App">
      <Navbar />
      <h1 className='counter'>{count}</h1>
      <button onClick={changeCounter}> change count</button>
    </div>
  );
}

export default App;
