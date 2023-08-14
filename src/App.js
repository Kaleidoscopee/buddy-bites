import { useState } from "react";
import BiteBuddy from "./components/BiteBuddy";
import "./index.css" // used https://www.w3schools.com/react/react_css.asp as a refrence to start my css

function App() {

  const apiKey = ''
  const [food, setFood] = useState(null);

  const getFood = async (searchTerm) => {
    try {
      const response = await fetch(/*website with api key and pass through values */);
      const food = await response.json();
      setFood(food)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    getFood('Burrito')
  })

  return(
    <>
      <Form foodSearch={getFood}/>
      <FoodDisplay food ={food}/>


    
    </>
  );




  return (
    <div className="App">
      <BiteBuddy className="biteBuddy"/>

    </div>

// const apiKey = '5ffcfe81'
// const [movie, setMovie] = useState(null);

// const getMovie = async (searchTerm) => {
//   try {
//     const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
//     const movie = await response.json(); // often typed as res.json
//     // console.log(data)
//     setMovie(movie)

//   } catch (error) {
//     console.log(error)
//   }

// }

// // getMovie('shrek')

// useEffect(()=> {
//   getMovie('batman')
// })

// return (
//   <>
//     <Form movieSearch={getMovie}/>
//     <MovieDisplay movie ={movie}/>
    
//      {/* Form movieSearch={getMovie} */}

   
//   </> code from imdb movie app as refrence
  );
}

export default App;
