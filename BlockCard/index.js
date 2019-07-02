import React, { Component } from 'react';
import './panel.css'

export default class Panel extends Component {

  static propTypes = {
    
  }
  constructor(props) {
    super(props)
  }

  state = {
    
  }

  render() {
    return (
        <section className="panelWrap">
          <div className="container">
            <div className="desc descLT"></div>
            <div className="desc descLB"></div>
            <div className="desc descRT"></div>
            <div className="desc descRB"></div>
            <div className="block blockLeft">
              <div className="chain"></div>
              <div className="square"></div>
            </div>
            <div className="block blockRight">
              <div className="chain fadeChain"></div>
              <div className="square"></div>
            </div>
            <ul className="main">
              <li>
                  <h3 className="title">序号</h3>
                  <p className="val">{this.props.orderNum}</p>
              </li>
              <li>
                  <h3 className="title">Hash值</h3>
                  <p className="val hash">{this.props.hash}</p>
              </li>
              <li>
                  <h3 className="title">有效个数</h3>
                  <p className="val">{this.props.validNum}</p>
              </li>
              <li>
                  <h3 className="title">无效个数</h3>
                  <p className="val">{this.props.invalidNum}</p>
              </li>
            </ul>
          </div>
        </section>
    )
  }

  componentDidMount(){
    
  }

}
