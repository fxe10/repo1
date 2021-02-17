import React, { Component } from 'react'
import pc from '../img/people.png'
export default class PeopleCard extends Component {
    render() {
        return (
            <div style={{width:'136px',height:'149px',border:'1px solid #dddddd',float:'left',margin:' 20px',textAlign:'center',fontWeight:'bold'}}>
                <img src={pc} alt=""/>
                {this.props.data.name}
            </div>
        )
    }
}
