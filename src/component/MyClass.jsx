import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import '../css/MyClass.css'
import CreateClass from './CreateClass'
import ClassDetails from './ClassDetails'
import Home from './Home'

export default class MyClass extends Component {
    render() {
        return (
            <div>                              
               <Route exact path='/' component={Home}/>
               <Route exact path='/CreateClass' component={CreateClass}/>
               <Route  path='/class' component={ClassDetails}/>              
            </div>
        )
    }
}
