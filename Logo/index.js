import React, { Component } from 'react';
import './style.scss'
import LogoIcon from './logo-color.png'
export default class Logo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="logo-wrap">
        <img className="logo-img" src={require('./logo-color.png')} alt=""/>
        <p className="logo-intro">{this.props.title}</p>
      </section>
    )
  }

  componentDidMount(){

  }

}
