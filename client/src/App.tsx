import { useState } from 'react'
import './App.css'

import axios from 'axios'
import { MainPage } from './components/mainPage';


function testFetch()
{

  console.log("HELLLO WORLD")

  axios.get('http://localhost:1337/employee')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainPage/>
    </>
  )
}

export default App
