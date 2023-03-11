import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  
const [places, setPlaces] = useState(data);
const [showText, setShowText] = useState(false);

  return (<div>

<div className="container">
<h1>{places.length} лучших турецких курортов </h1>
  </div>


  {places.map((item => {
    const {id, placeName, description, image, source, showMore} = item;


    const removePlace = (id) => {
      let newPlaces = places.filter((place) => place.id  !== id)
      setPlaces(newPlaces)
    }

    const showTextClick = (item) => {
      item.showMore = !item.showMore
      setShowText(!showText)
    }

    return( 
      <div key={id}>

        <div className="container">
      <h2> {id} - {placeName} </h2>
      </div>

      <div className="container">
      <p> {showMore ? description : description.substring(0, 220) + "...."} 
      <button onClick={() => showTextClick(item)}>{showMore ? "См.меньше" : "См.больше"}</button>
      
      </p>
      </div>

      <div className="container">
      <img src={image} width="500px" alt="plaj"/>
      </div>

      <div className="container">
      <p> {source} </p>
      </div>

      <div className="container">
    <button className="btn" onClick={() => removePlace(id)}>удалить</button>
      </div>



      </div>
    )

  }))}



    
    
    </div>
  );
}

export default App;




