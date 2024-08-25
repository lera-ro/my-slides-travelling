import './App.css';
import { useState } from 'react';
import { data } from './data';

function App() {
  const [travel, setTravel] = useState(0);
  const {id, country, place, description, image} = data[travel];

  const previousTravel = () => {
    setTravel(travel => {
      travel--;
      if (travel < 0) {
        return data.length - 1;
      }
      return travel;
    })
  }

  const nextTravel = () => {
    setTravel(travel => {
      travel++;
      if (travel > data.length - 1) {
        travel = 0;
      }
      return travel;
    })
  }

  return (<div> 

    <div className='container'>
     <button onClick={previousTravel}>Previous</button>
      <h2>{country}</h2>
     <button onClick={nextTravel}>Next</button>  
    </div> 

    <div className='section'>
      <div className='box one'>
        <img src={image} width="300px" alt='travel'/>
      </div>
        <div className='box two'>
          <h1>{id} - {place}</h1>
          <p>{description}</p>
        </div>
    </div>

  </div>)}

export default App;