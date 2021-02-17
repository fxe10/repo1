import React, { Component } from 'react'
import ReturnButton from './ReturnButton'
import Form from './Form'
export default class CreateClass extends Component {

    render() {
        return (
            
            <div>
                <div className="Top">
                    <div style={{float:'left',margin:'10px 0 0 0',fontSize:'14px'}}>
                        我的班级
                    </div>
                    <div style={{float:'right'}}>
                    <ReturnButton history={this.props.history}/>
                    </div>              
               </div>
               <div className="Bottom">
            <Form history={this.props.history}/>
               </div>
            </div>
        )
    }
}
