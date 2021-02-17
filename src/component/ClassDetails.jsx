import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import ReturnButton from './ReturnButton'
import GenerateData from './generateData'
import sc from '../img/searchN.png'
export default class ClassDetails extends Component {
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
               <div className="Bottom" >
                   <div style={{ textAlign:'center',position:'relative',margin:'10px 0 20px 0'}}>
                       折纸兴趣班                      
                       <input type="search" placeholder='搜索功能暂未实现！！！' name="" id="" 
                       style={{position:'absolute' ,
                       top:'0',right:'50px',
                       marginTop:'0',
                       width:'248px',
                       height:'34px',
                       border:'1px solid #3ba8f0',
                       }}/>
                       <button type="submit"style={{width:'50px',height:'35px', position:'absolute', right:'0',background:`url(${sc})`,outline:'none',border:'none'}}></button> 
                   </div>
                   <div style={{width:'1138px',height:'800px',border:'1px solid #dddddd'}}>
                   <div style={{height:'36px',backgroundColor:'#dddddd',lineHeight:'36px'}}>
                       <Link to='/class/details/teacher' style={{display:'inline-block', color:'#666666',width:'124px',height:'36px',padding:'0 38px'}}>所有老师（12）</Link>
                       <Link to='/class/details/students'style={{display:'inline-block', color:'#666666',width:'124px',height:'36px',padding:'0 38px'}}>所有学生（12）</Link>
                       <Link to='/class/details/parents' style={{display:'inline-block', color:'#666666',width:'124px',height:'36px',padding:'0 38px'}}>所有家长（10）</Link>
                   </div>
                   
                   <Route exact path='/class/details/teacher' component={GenerateData}/>
                   <Route  path='/class/administrate' component={GenerateData}/>
                   <Route  path='/class/teach' component={GenerateData}/>
                   <Route  path='/class/details/students' component={GenerateData}/>
                   <Route  path='/class/details/parents' component={GenerateData}/>
                   
                   
                   </div>
                   
                    
               </div>
            </div>
        )
    }
}
