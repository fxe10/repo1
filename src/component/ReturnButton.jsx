import React, { Component } from 'react'


export default class ReturnButton extends Component {
   
    go = ()=>{
		this.props.history.push('')
        
	}
   
    render() {
        
        return (
            <div>           
                <button onClick={this.go} style={{width:'100px',height:'35px',backgroundColor:'#3ca8f0',color:'#ebf5fd',borderRadius:'2px',outline:'none',border:'none',fontSize:'12px'}}>
                    返回上一级
                </button>          
            </div>
        )
    }
}
