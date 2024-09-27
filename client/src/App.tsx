
import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainPage } from './components/mainPage';
import { AddEditPage } from './components/addEditPage';




function App() {

{console.log("App is running")}

return(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<MainPage/>}/>
      <Route path = "/addEdit" element = {<AddEditPage/>}/>
      <Route path = "/addEdit/:uuid" element = {<AddEditPage/>}/>
    </Routes>
  </BrowserRouter>
)
}


/*
function App() {
    return (
    <>
      <MainPage/>
    </>
  )
}

*/
export default App
