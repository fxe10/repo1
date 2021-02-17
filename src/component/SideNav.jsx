import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import nav1 from '../img/navcontent1.png';
import nav2 from '../img/navcontent2.png';
import nav3 from '../img/navcontent3.png';
import nav4 from '../img/navcontent4.png';
import MyClass from './MyClass';


export default class SideNav extends Component {
    render() {
        return (
        <div>
                 <div className="main">
                   <div className="w">
              
              <div className="nav">
                   <div className="navTop">
                       <Link to="" className="fl">
                           <div className="arrow-left fl"></div>
                           <div className="fl">个人中心</div>
                       </Link>
                       <Link to="" className="fr">
                           <div className="media"></div>
                       </Link>
                   </div>
                   <div className="navContent">
                       <ul>
                           <li>
                               <Link to=""><img  src={nav1} alt=""/>其他内容</Link>
                           </li>
                           <li>
                               <Link to=""><img src={nav2} alt=""/>其他内容</Link>
                           </li>
                           <li style={{ width:'210px',backgroundColor: '#f4f5f5',borderLeft: '3px solid #3ba8f0'}}>
                               <Link to="" style={{color:'#3ba8f0 '}}><img src={nav3} alt=""/>我的班级</Link>
                           </li>
                           <li>
                               <Link to=""><img src={nav4} alt=""/>其他内容</Link>
                           </li>
                       </ul>
                   </div>
               </div>
              
               <MyClass/>
                   </div>
               </div>
        </div>
        )
    }
}
