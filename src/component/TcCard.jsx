import React, { Component } from 'react'
import bg from '../img/优化我的班级.png'
export default class TcCard extends Component {
    render() {
        return (
            
            <div style={{position:'relative',float:'left',marginRight:'20px', marginBottom:'20px',width:'340px',height:'160px',border:'1px solid #ccc'}}>
            <img src={bg} alt="error"style={{float:'left'}}/>
            <div style={{float:'left'}}>
                <ul style={{marginTop:'22px',fontSize:'14px',color:'#333333'}}>
                    <li>{this.props.data.data.schoolState}-{this.props.data.data.grade}</li>
                    <li><span style={{color:'#999999'}}>学校 ：</span>{this.props.data.data.school}</li>
                    <li><span style={{color:'#999999'}}>班级 ：</span>{this.props.data.data.class}</li>
                    <li><span style={{color:'#999999'}}>班主任: </span><span style={{fontWeight:'bold'}}>田小雨</span></li>
                    <li><span style={{color:'#999999'}}>学生 ：</span>33人</li>
                    <li><span style={{color:'#999999',fontSize:'10px'}}>{this.props.data.data.exitPermission}</span></li>
                </ul>
            </div>
            <div style={{position:'absolute' ,right:'0',bottom:'0', width:'56px',height:'20px',lineHeight:'20px', backgroundColor:'#3ba8f0',color:'#ffffff',fontSize:'12px',textAlign:'center'}}>教学班</div>
        </div>
        )
    }
}
