import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import DBZ from './pages/DBZ'
import Pokemon from "./pages/Pokemon"
import Filmes from './pages/Filmes'
function App(){
    return(
      <BrowserRouter>
          <Routes>
              <Route path='/' exact element = {<DBZ />}></Route>
              <Route path="/pokemon" exact element ={<Pokemon />}></Route>
              <Route path="/filmes" exact element= {<Filmes />}></Route>
          </Routes>
      </BrowserRouter>
    )
}
export default App