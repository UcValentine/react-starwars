// import React, { useState, useEffect } from 'react'
//import axios from 'axios'
import React from 'react'
import Header from './components/ui/Header'
import Character from './components/characters/Character'
import Search from './components/ui/Search'
import './App.css'


const App = () => {
  //const [items, setItems] = useState([])
  //const [query, setQuery] = useState('')

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     const result = await axios(
  //       `https://swapi.dev/api/people/?search=${query}`
  //     )
  //     console.log(result.data)
  //     setItems(result.data)
  //   }

  //   fetchItems()
  // }, [query])


  return (
  
    <div className='container'>
      <Header />
      {/* <Search getQuery={(q) => setQuery(q)} /> */}
      <Search />
      <Character /> 
    </div>
  )
}

export default App





//import './App.css';
//import Search from './search';

//function App() {
  //return (
    //<div className="App">
      //<p>START WARS</p>
      //<Search />
    //</div>
  //);
//}

//export default App;
