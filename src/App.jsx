import React from "react"
import { useState, useEffect } from 'react'
import './App.css'

function Jokes() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showDelivery, setShowDelivery] = useState([]); //to show array onClick
  const [text, setText] = useState([]); // to change text after click

  //call back function
  useEffect(() => {
      setLoading(true)
      fetch(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10`)
        .then((response) => response.json())
        .then(data => {
          console.log(data);
          // if(data.type === "single") {
          //   setJokes([data]);estor 
          // } else {
            setJokes(data.jokes); //set joke to state with fetched data
            //JavaScript builtin timeout function
          // }
          setTimeout(() => {
            setLoading(false);
          }, 5000)
        })
      .catch (error => {
        console.log("Dad must be sleeping, no jokes here", error)
        setError("Dad must be sleeping, no jokes here");
        setLoading(false)
    });
  }, [])

  // define "handleButtonClick" to change state of delivery
  // we pass index so we know which joke is being clicked 
  // example: it's unique index id will say button 3
  const handleButtonClick = (index) => {
    if(showDelivery[index]) {
      setShowDelivery(prevState => ({ ...prevState, [index]: false}));
      setText(prevState => ({ ...prevState, [index]: "Tell Me"}));
    } else {
      setShowDelivery(prevState => ({ ...prevState, [index]: true}));
      setText(prevState => ({ ...prevState, [index]: "D'oh!"}))

    }
  }



  return (
    <>
      <h1>Jokes</h1>

      {loading && <p>(B)Dad Jokes Incoming...</p>} 

      {error && <p>{error}</p>}

      {jokes.length > 0 && jokes.map((joke, index) => (
        joke.type === "single" ?
        <p key={index}>{joke.joke}<hr/></p> :
        <div key={index}>
            <p>{joke.setup}<br /></p>
            {showDelivery[index] && <p>{joke.delivery}</p>}
            <button onClick={() => handleButtonClick(index)}>
              {text[index] || "tell me"}
            </button>
            <hr/>
        </div>
      ))}
    </>
  )
}

export default Jokes;
