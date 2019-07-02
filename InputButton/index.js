import React, { Component } from 'react'
import './style.scss'

export default class InputButtton extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){

  }
  render () {
    return (
      <div className={`input-button ${this.props.type === 'full' ? 'full' : 'empty'}`}
        onClick={() => {this.props.onClick()}}>
        {this.props.text}
      </div>
    )
  }
}