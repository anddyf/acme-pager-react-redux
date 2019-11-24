import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav.js'
import Pages from './Pages.js'
import { HashRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import { store, fetchPage } from "./Store.js"

const rootEl = document.querySelector('#root');

class App extends React.Component{
    componentDidMount(){
        setTimeout(()=>{
            for(let i =0; i < 7;i++){
                fetchPage(i)      
            }
        },1000)
    }
    render(){
      return (
        <HashRouter>
          <div id="headline"><h1>Acme Pager</h1></div>
          <Route component={ Nav } />
          <Switch>
          <Route path="/:id" component={Pages}/>
          <Redirect to="/0"/>
          </Switch>
        </HashRouter>
      );
    }
  }

ReactDOM.render(<App/>, rootEl);
