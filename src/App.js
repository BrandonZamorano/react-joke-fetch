import { useState } from 'react';
import './App.css';
import Axios from 'axios'

const url = 'https://v2.jokeapi.dev'

function App() {
  const [joke, setJoke] = useState('')
  
const getJoke = () => {
  Axios.get(`${url}/joke/any`).then(res => {
    console.log(res)
    if (res.data.setup) {
      return setJoke(`${res.data.setup} ... ${res.data.delivery}`)
    }
    return setJoke(res.data.joke)
    
  })
}
  return (
    <div className="App">
    <h1>Joke Fetcher</h1>
    <button onClick={getJoke}>Get Joke</button>
    <p>{joke}</p>

    </div>
  );
}

export default App;
