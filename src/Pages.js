import React from 'react';
import {connect, deleteEmployee } from "./Store.js"
import { Link } from "react-router-dom";

const Pages = connect(({ page, match }) => {
    if(page.length === 0){
        return <div>...loading</div>
    }

    const currentPage = page.filter( (employees, idx) => {
        if(`${idx}` === match.params.id){
         return employees
        }
    })

    return (
      <table>
        <tr id="header">
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Title</th>
        </tr>
        {
           currentPage.map( (employees,idx) =>{
           return employees.rows.map( employee =>{
                return( 
                <tr key={employee.id} >
                    <td>{` ${employee.firstName}`}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>{employee.title}</td>
                    </tr>
                )
            })
           })      
        }
      </table>
    );
  })

  export default Pages