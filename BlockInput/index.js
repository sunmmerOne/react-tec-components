import React, { Component } from 'react';

import './blockInput.css'
export default class BlockInput extends Component {

  static propTypes = {
    
  }
  constructor(props) {
    super(props)
  }

  state = {
    noText: false
  }
  onBlur = e => {
    if (!this.props.isRequire) {
      return false
    }
    if (!e.target.value) {
      this.setState({
        noText: true
      })
    } else {
      this.setState({
        noText: false
      })
    }
  }

  render() {
    return (
      <section className="inputWrap">
        {
          this.props.lable
          ?
          <div className="inputLable">
            {
              this.props.isRequire
              ?
              <span className="require">*</span>
              :
              ''
            }
            <span>{this.props.lable}：</span>
            {/* <span>{this.props.lable}</span>
            {
              this.props.isRequire
              ?
              <span className="require">*</span>
              :
              ''
            }
            : */}
          </div>
          :
          ''
        }
        <div className={`inputContainer ${this.props.lable ? 'lableSpace' : ''} `} style={{...this.props.style}}>
          <input
            type="text"
            id={this.props.id}
            autoComplete="off"
            className={`${this.props.higher ? 'higher': ''} ${this.state.noText ? 'no-text' : ''}`}
            placeholder={this.props.placeholder || '请输入'}
            disabled={this.props.disabled || false}
            value={this.props.value}
            onChange={(e)=>{
              this.props.onChange && this.props.onChange(e)
            }}
            onInput={(e)=>{
              this.props.onInput && this.props.onInput(e)
            }}
            onFocus={(e)=>{
              this.props.onFocus && this.props.onFocus(e)
            }}
            onBlur={(e)=>{
              // this.props.onBlur && this.props.onBlur(e)
              this.onBlur(e)
            }}
          />
        </div>
      </section>
    )
  }

  componentDidMount(){

  }

}

/**
 * param       type       注   
 * lable       string     表单的lable
 * isRequire   boolean    是否必须标志
 * placeholder string     占位符
 * higher      boolean    是否一直高亮input
 * onChange    function
 * onInput     function 
 * disabled     bollean
 * onFocus     function
 * onBlur      function
 * style       object
*/
