import React, { Component } from 'react';
import { Carousel } from 'antd';
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
      <Carousel 
        vertical
        autoplay={true}
        dots={false}
      >
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
                  <p className="val">1</p>
              </li>
              <li>
                  <h3 className="title">Hash值</h3>
                  <p className="val">220d622dfn….</p>
              </li>
              <li>
                  <h3 className="title">有效个数</h3>
                  <p className="val">100</p>
              </li>
              <li>
                  <h3 className="title">无效个数</h3>
                  <p className="val">1</p>
              </li>
            </ul>
          </div>
        </section>
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
                  <p className="val">2</p>
              </li>
              <li>
                  <h3 className="title">Hash值</h3>
                  <p className="val">60d622dfn….</p>
              </li>
              <li>
                  <h3 className="title">有效个数</h3>
                  <p className="val">10</p>
              </li>
              <li>
                  <h3 className="title">无效个数</h3>
                  <p className="val">0</p>
              </li>
            </ul>
          </div>
        </section>
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
                  <p className="val">3</p>
              </li>
              <li>
                  <h3 className="title">Hash值</h3>
                  <p className="val">90d622dfn….</p>
              </li>
              <li>
                  <h3 className="title">有效个数</h3>
                  <p className="val">100</p>
              </li>
              <li>
                  <h3 className="title">无效个数</h3>
                  <p className="val">0</p>
              </li>
            </ul>
          </div>
        </section>
      </Carousel>
    )
  }

  componentDidMount(){
    
  }

}
