import React, { Component } from 'react'
import CreateClassButton from './CreateClassButton'
import Administration from './Administration'
import Teaching from './Teaching'
export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="Top">
                    <div style={{float:'left',margin:'10px 0 0 0',fontSize:'14px'}}>
                        我的班级
                    </div>
                    <div style={{float:'right'}}>
                    <CreateClassButton/>
                    </div>              
               </div>
               <div className="Bottom">
                    <Administration/>
                    <Teaching/>
               </div>
            </div>
        )
    }
}
