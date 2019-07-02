import React, { Component } from 'react';
import { Link } from 'react-router'

import './blockButton.css'
export default class BlockButton extends Component {

  static propTypes = {
    
  }
  constructor(props) {
    super(props)
  }

  state = {
    
  }

  render() {
    return (
      <section className={`buttonWrap ${this.props.isActive ? 'buttonActive' : ''}`} style={{...this.props.style}}>
        <Link className="buttonBox"
          // href={this.props.href || "javascript:;"}
          // target={this.props.target || '_blank'}
          to={this.props.link || "javascript:;"}
          onClick={()=>{
            (this.props.onClick && !this.props.href) && this.props.onClick()
          }}
        >
          <span className="button">{this.props.text || ''}</span>
        </Link>
        <em className="arrow"></em>
      </section>
    )
  }

  componentDidMount(){

  }

}

/** 
 * param       type       注   
 * text        string     按钮的文本
 * onClick     function   点击事件
 * href        string     超链接，存在href的情况下，点击事件不生效
 * target      string     超链接打开方式
 * isActive    boolean    激活状态
 */
