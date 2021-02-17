import React, { Component } from 'react'
import Save from './Save'
export default class Form extends Component {
    state = {
        school:'', 
        schoolState:'' ,
        grade:'',
        class:'',
        classKind:'教学班',                    //默认教学班
        exitPermission:'经管理员审核后退出'    //默认选中
    }
    saveSchool = (event)=>{
        this.setState({school:event.target.value})
    }
    saveGrade = (event)=>{
        this.setState({grade:event.target.value})
    }
    getKindA =(event)=>{
        this.setState({classKind:event.target.value})
    }
    getKindB =(event)=>{
        this.setState({classKind:event.target.value})
    }
    saveClass = (event)=>{
        this.setState({class:event.target.value})
    }
    saveSchoolState = (event)=>{
        this.setState({schoolState:event.target.value})
    }
    permission=(event)=>{
        this.setState({exitPermission:event.target.value})
    }
    render() {
        const{classKind}=this.state;
        const{exitPermission}=this.state;
        return (           
            <div>
                <div style={{fontSize:'14px', color:'#666666',marginLeft:'12px'}}>尊敬的<span style={{color:'#3ba8f0'}}>老师（刘老师） </span>， 请填写班级信息</div>
                <div className="container">
                <form action="" method="">
                    
                    <div className="row"> 
                        <div className="col-25">
                            <label htmlFor="school">学校</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="" onChange={this.saveSchool}  id="school" placeholder="  请选择学校" pattern="^[\u4e00-\u9fa5]{0,15}$"/>
                        </div>                       
                    </div>
                    <div className="row"> 
                        <div className="col-25">
                            <label htmlFor="schoolState"><span>*{'\u00A0'}</span>学段</label>
                        </div>
                        <div className="col-75">
                            <select id="schoolState" name="" required defaultValue='' onChange={this.saveSchoolState} >
                               <option value='' disabled  style={{display:'none'}}> {'\u00A0'}请选择学段</option>
                               <option value="小学">小学</option>
                               <option value="初中">初中</option>
                               <option value="高中">高中</option>
                               <option value="大学">大学</option>
                            </select>
                        </div>                       
                    </div>
                    <div className="row"> 
                        <div className="col-25">
                            <label htmlFor="grade"><span>*{'\u00A0'}</span>年级</label>
                        </div>
                        <div className="col-75">
                            <select id="grade" name="" required defaultValue='' onChange={this.saveGrade} >
                               <option value='' disabled  style={{display:'none'}}> {'\u00A0'}请选择年级</option>
                               <option value="一年级">一年级</option>
                               <option value="二年级">二年级</option>
                               <option value="三年级">三年级</option>                              
                               <option value="四年级">四年级</option>                              
                            </select>
                        </div>                       
                    </div>
                    <div className="row"> 
                        <div className="col-25">
                            <label htmlFor="class"><span>*{'\u00A0'}</span>班级名</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="" onChange={this.saveClass} required id="class" placeholder="  请选择班级名称，限20个字符，不支持输入_和%" pattern="^[a-zA-Z0-9\u4e00-\u9fa5]{0,20}$"/>
                        </div>                       
                    </div>
                    <div className="row" /* style={{overflow:'hidden'}} */> 
                        <div className="col-25">
                            <label >类型</label>
                        </div>
                        <div className="col-75">
                            <label><input type="radio" name="" value="行政班" checked={classKind==="行政班"} onChange={this.getKindA}/><span>{'\u00A0'}{'\u00A0'}行政班{'\u00A0'}{'\u00A0'}</span></label>
                            <label><input type="radio" name="" value="教学班" checked={classKind==="教学班"} onChange={this.getKindB}/><span>{'\u00A0'}{'\u00A0'}教学班{'\u00A0'}{'\u00A0'}</span></label>                            
                        </div>                       
                    </div>
                    <div className="row"> 
                        <div className="col-25">
                            <label >退出权限设置</label>
                        </div>
                        <div className="col-75">
                            <label><input type="radio" name="" value="允许退出" checked={exitPermission==="允许退出"} onChange={this.permission}/><span>{'\u00A0'}{'\u00A0'}允许退出{'\u00A0'}{'\u00A0'}</span></label>
                            <label><input type="radio" name="" value="经管理员审核后退出" checked={exitPermission==="经管理员审核后退出"} onChange={this.permission}/><span>{'\u00A0'}{'\u00A0'}经管理员审核后退出{'\u00A0'}{'\u00A0'}</span></label>                            
                            <label><input type="radio" name="" value="禁止退出" checked={exitPermission==="禁止退出"} onChange={this.permission}/><span>{'\u00A0'}{'\u00A0'}禁止退出{'\u00A0'}{'\u00A0'}</span></label>                            
                        </div>                       
                    </div>
                    <div className="row"> 
                        <div className="col-25">
                            
                        </div>
                        <div className="col-75">
                                   <Save data={this.state} history={this.props.history}/>
                        </div>                       
                    </div>
                
                   
                    
                       
                   
            
                    
                </form>
                </div>
            </div>
        )
    }
}
