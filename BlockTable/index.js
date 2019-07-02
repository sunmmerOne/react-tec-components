import React, { Component } from 'react';
import {
  Table
} from 'antd';
import './blockTable.css'
export default class BlockTable extends Component {

  static propTypes = {
    
  }
  constructor(props) {
    super(props)
  }

  state = {
    
  }

  render() {
    
    return (
      <section className="tableWrap">
        <div className="desc descLT"></div>
        <div className="desc descLB"></div>
        <div className="desc descRT"></div>
        <div className="desc descRB"></div>
        <div className="block blockLeft"></div>
        <div className="block blockRight"></div>
        <Table 
          bordered={false}
          pagination={false}
          {...this.props}
        />
      </section>
      
    )
  }

  componentDidMount(){

  }

}
/**
 * 同 Ant Design中的Table组件
 * 表头： dataSource
 * 主体： columns
 */
