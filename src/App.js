import React, {useState, useEffect} from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Header from './header/Header'
import Home from './home/Home'
import Produtos from './produtos/Produtos'
import Sobre from './sobre/Sobre'
import Compras from './compras/Compras'



function App(){


    return(
      <BrowserRouter>
      <Header link={Link}></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/produtos">
          <Produtos></Produtos>
        </Route>
        <Route path="/sobre">
          <Sobre></Sobre>
        </Route>
        <Route path="/compras">
          <Compras></Compras>
        </Route>

    </Switch>
      </BrowserRouter>
    )
}

export default App