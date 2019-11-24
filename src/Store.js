import React from 'react';
import {createStore, combineReducers} from 'redux'
const axios = require('axios')
const API = 'http://localhost:3000'
const reducer = combineReducers({
  page: (state = [], action)=> {
    if(action.type === 'SET_PAGE'){
      state = [...state, action.page]
    }
    if(action.type === 'DELETE_EVENT'){
    }
    return state;
  }
});

const store = createStore(reducer);

const fetchPage = async(number)=> {
    return store.dispatch({ type: 'SET_PAGE', page: (await axios.get(`${API}/api/employees/${number}`)).data})
}
const deleteEmployee = async( employeeID, employee)=> {
    console.log(employeeID)
    console.log(employee)
    await axios.delete(`/api/employees/${employeeID}/${employee.id}`);
    store.dispatch({ type: 'DELETE_EMPLOYEE', employee });
  };

const connect = (Component)=> {
    class Added extends React.Component{
      constructor(){
        super();
        this.state = store.getState();
      }
      componentWillUnmount(){
        this.unsubscribe();
      }
      componentDidMount(){
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
      }
      render(){
        return (
          <Component {...this.state } {...this.props }/>
        );
      }
    }
    return Added;
  }


export {
    store,
    reducer,
    connect,
    fetchPage,
    deleteEmployee
}