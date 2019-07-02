import React, { Component } from 'react'
import { Icon } from 'antd'
import './style.scss'

export default class BlockLink extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    // console.log(this.props)
    return (
      <div className="right-link" onClick={() => {this.props.onClick()}}>
        <Icon type={this.props.iconType} />
        <span className="link-text">{this.props.text}</span>
      </div>
    )
  }
}

/** 
 * param       type       注   
 * text        string     link的文本
 * iconType     string   icon
 * onClick        func     点击方法
 */

