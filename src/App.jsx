import Card from "./components/card";
import React from "react";
import data from "./data"


function App(){
  const Places=data.map((place) =>{
       return (<Card
        key={place.id}
        item={place}
      />
       )
  })
  return (
    <>
      {Places}
    
    
    </>
  )
}

export default App;