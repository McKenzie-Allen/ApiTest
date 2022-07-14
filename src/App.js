import './App.css';
import React, { useState } from 'react'
import axios from 'axios';



function App() {
  const [ count, set ] = useState(0)
  const reset = () => set(0)
  const increase = () => {set(count + 1)
  if (count >= 10) {
    set(0)
    }
  }
  const [ name, setName ] = useState('')

 



  const dataGetter = () => {
    console.log('getting')
    axios.get('https://swapi.dev/api/people').then(function(res){
      const maxIndex = res.data.results.length
      console.log(maxIndex)
      const getRandomIndex = (maxIndex) => {
       const randomIndex = Math.floor(Math.random() * maxIndex)
       return randomIndex
      }
      const setIndex = getRandomIndex(maxIndex)
      console.log(setIndex)

      let randomPerson = res.data.results[setIndex]

      console.log(randomPerson)
      const { name } = randomPerson
      setName(name)
    })
  }
  

  return (
    <div>
      <div>
        <button onClick={increase}>{count}</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <h3>Random Data</h3>
        <button onClick={dataGetter}>get random Data</button>
        <h3>Full Name {name}</h3>
      </div>
    </div>
  );
}

export default App;
