import {useState} from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [thought, setThought] = useState('Nothing is impossible!');

  const onClickHandler = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {       
        const { advice } = response.data.slip;
        setThought(advice);
      })
      .catch((error) => {
        console.log(error);
      });    
  }
  
  return (
    <div className="app">
        <div className="card">
          <h1 className="heading">{thought}</h1>
          <button className="button" onClick={onClickHandler}>
            <span>THOUGHT OF THE DAY!</span>
          </button>
        </div>
      </div>
  );
}

export default App;
