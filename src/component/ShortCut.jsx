import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/福建省教育信息统一化平台.png'

export default class ShortCut extends Component {
    render() {
        return (
            <div>
                 <div className="shortcut">
               <div className="w">
                  
                  <div className="fl">
                       <Link to=""><img src={logo}alt="error"/></Link>
                   </div>
                   <div className="fl">
       
                       <ul id='shortlist' className="fl">
                           <li className="spacer"></li>
                           <li><Link to="">首页</Link></li>
                           <li className="spacer"></li>
                           <li><Link to="" className="current">教学管理</Link> </li>
                           <li className="spacer"></li>
                           <li><Link to="">学习</Link></li>
                           <li className="spacer"></li>
                           <li><Link to="">资源超市</Link></li>
                           <li className="spacer"></li>
                           <li><Link to="">教育应用</Link></li>
                           <li className="spacer"></li>
                           <li><Link to="">新闻</Link></li>
                           <li className="spacer"></li>
                           <li><Link to="">名师名校</Link></li>
                           <li className="spacer"></li>
                       </ul>
       
                       <ul id='shortright' className="fl">
                           <Link to="./">
                               <li className='newFeatrues'></li>
                           </Link>
                           <Link to="./">
                               <li className="search"></li>
                           </Link>
                           <Link to="./">
                               <li className="teacherlogo"></li>
                           </Link>
                       </ul>
       
                   </div>
                 
               </div>
           </div>
            </div>
        )
    }
}
