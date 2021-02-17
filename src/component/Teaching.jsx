import React, { Component } from 'react'
import axios from 'axios'
import TcCard from './TcCard'
import {Link} from 'react-router-dom'

export default class Administration extends Component {
    state={Num:0,data:[]}
    key=[]
    componentDidMount(){       
        axios.get('http://localhost:4000/tcclass')
        .then((response)=>{
            let num=0;
            this.setState({data:response.data})
            for(let i=0;i<response.data.length;i++)
            {
                this.key.push( response.data[i].id ) 
                         
            }
            num=response.data.length     
            this.setState({Num:num})         
        }
        )
        .catch(function(error){
            console.log(error);
        })
        
    }
    renderClass=()=>{
        let ad=[];
        for(let i=0;i<this.state.Num;i++){
           ad.push(<Link to={`/class/teach/:${this.key[i]}`}key={this.key[i]}><TcCard key={this.key[i]} data={this.state.data[i]}/></Link>)
        }
        
        return ad;
    }
    render() {
        return (
            <div style={{overflow:'hidden'}}>
                <div id='father' style={{fontSize:'14px', color:'#949494',margin:'0 0 20px 0'}}> 教学班是根据课程要求而设置的班级</div>
                {this.renderClass()}
            </div>
        )
    }
}

