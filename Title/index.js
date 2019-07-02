import React, { Component } from 'react';
import { Icon } from 'antd'

import './title.css'
export default class Title extends Component {

  static propTypes = {
    
  }
  constructor(props) {
    super(props)
  }

  state = {
    
  }

  render() {
    return (
      <section className="titleWrap">
        <span className="dec decLT"></span>
        <span className="dec decLB"></span>
        <span className="dec decRT"></span>
        <span className="dec decRB"></span>
        <div className="titleMain">
          {
            this.props.title
            ?
              <div 
                className={`title ${this.props.titleClass || ''}`}
                onClick={()=>{
                  this.props.titleClick && this.props.titleClick()
                }}
              >
                {this.props.title || ''}
              </div>
            :
              ''
          }
          {
            this.props.tips 
            ?
              <div 
                className={`tips ${this.props.tipsClass || ''}`}
                onClick={()=>{
                  this.props.tipsClick && this.props.tipsClick()
                }}
              >
                {
                  this.props.iconType ? <Icon style={{marginRight: '4px'}} type={this.props.iconType} /> : ''
                }
                {this.props.tips || ''}
              </div>
            :
              ''
          }
        </div>
      </section>
    )
  }

  componentDidMount(){

  }

}

/** 
 * param       type       注   
 * title       string     左侧标题
 * titleClick  function   左侧标题点击事件
 * tipsClick   function   右侧标题点击事件
 * tips        string     右侧标题
 * tipsClass   string     右侧标题的定制样式，如小图标等
 * iconType     string    icon图标
 */
