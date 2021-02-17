import React, { Component } from 'react'
import axios from "axios";
import "../mock"
import PeopleCard from './PeopleCard'
export default class GenerateData extends Component {
    state={data:[]}
    componentDidMount(){
        axios.get('/mock', {dataType:'json'}) 
             .then(res=>{
        
        this.setState({data:res.data.userinfo})
        // console.log(this.state.data[1].name);
        })
        }
    generate=()=>{
        let name=[];
        for(let i=0;i<this.state.data.length;i++)
        {
            name.push(<PeopleCard data={this.state.data[i]} key={i}></PeopleCard>)
        }
        return name;
    }
    render() {
        return (
            <div>
               {this.generate()}
            </div>
        )
    }
}

