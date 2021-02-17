import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import axios from 'axios'
export default class Save extends Component {
    // school:'', 
    //     schoolState:'' ,
    //     grade:'',
    //     class:'',
    //     classKind:'',   
    //     exitPermission:''  
    
    click=()=>{
        const data=this.props.data;
        const re=/^[a-zA-Z0-9\u4e00-\u9fa5]{1,20}$/;
        if((data.schoolState==='小学'||data.schoolState==='初中'||data.schoolState==='高中'||data.schoolState==='大学')&&(data.grade==='一年级'||data.grade==='二年级'||data.grade==='三年级'||data.grade==='四年级')&&(re.test(data.class)))
       { alert("班级创建成功！跳转到我的班级！");
           this.save()}
        else{alert('班级创建失败！请按表单要求创建！');
        console.log(data,'创建失败');
            return false}
    }
    save=()=>{
        const data=this.props.data;
        const history=this.props.history;
        if(data.classKind==='行政班')
        {axios.post("http://localhost:4000/adclass",{data})
        .then((response)=>{
            console.log(response,'创建成功');
            history.push('');

        })
        .catch((error)=>{
            console.log(error);
        })}
        else{
            axios.post("http://localhost:4000/tcclass",{data})
        .then((response)=>{
            console.log(response);
            history.push('');

        })
        .catch((error)=>{
            console.log(error);
        })
        }
    }
    render() {
        
        return (
            <div>           
                
                <button type='submit' onClick={this.click} style={{width:'100px',height:'35px',backgroundColor:'#3ca8f0',color:'#ebf5fd',borderRadius:'2px',outline:'none',border:'none',fontSize:'12px'}}>
                    保存
                </button>   
                   
            </div>
        )
    }
}
