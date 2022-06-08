import './css/App.css';
import Navbar from './components/navbar';
import React, {useState} from 'react';
import { Routes, Route} from 'react-router-dom'
import Home from './views/Home';
import Shop from './views/Shop';
function App() {

  const [count, setCount] = useState(0);
  const changeCounter = () => {
    console.log(count)
    setCount(count + 1);
  }



  return (
    <React.Fragment>
      <Navbar />
      <div className="App">
        <div className='row'>
          <h1 className='counter'>{count}</h1>
          <button className='brn brn-sm btn-info' onClick={changeCounter}> change count</button>
        </div>
      </div>
      <Routes>
        <Route children path='/' element = {<Home />} />
        <Route children path='/shop' element={<Shop />} />
        <Route children path=''/>
      </Routes>
  </React.Fragment>);
}

export default App;
