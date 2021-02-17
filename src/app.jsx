import React, { Component } from 'react'
// import {BrowserRouter as Router , Link ,Route} from 'react-router-dom'
import './css/index.css'

import ShortCut from './component/ShortCut'
import SideNav from './component/SideNav'
import { HashRouter } from 'react-router-dom'
export default class App extends Component {
    render() {
        return (
           <HashRouter>
                <div> 
                  <ShortCut/>
                  <SideNav/>
                  
                </div>
           </HashRouter>
               
            
        )
    }
}
