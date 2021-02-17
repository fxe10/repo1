import React, { Component } from 'react'
import { Link} from 'react-router-dom'
export default class CreateClassButton extends Component {
    render() {
        return (
            <div>
                
                <Link to='./CreateClass'>
                <button style={{width:'100px',height:'35px',backgroundColor:'#3ca8f0',color:'#ebf5fd',borderRadius:'2px',outline:'none',border:'none',fontSize:'12px'}}>
                    创建班级
                </button>
                </Link>
                
            </div>
        )
    }
}
