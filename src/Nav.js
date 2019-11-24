import React from 'react';
import { Link } from "react-router-dom";
import {connect, store} from "./Store.js"
const axios = require('axios')

const Nav =  connect(({ page, location: { pathname }})=> {

    if(page.length === 0){
        return <div>...loading</div>
    }

    return (
      <nav>
       {
        page.map((object,idx) =>{
        return <Link to={`${idx}`} className={ pathname === `/${idx}` ? 'active': ''}>{idx+1}</Link>

       })
       }
      </nav>
    );
  })

export default Nav