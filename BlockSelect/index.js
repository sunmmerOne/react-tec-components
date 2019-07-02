import React, { Component } from 'react';
import { 
  Select,
  Icon
} from 'antd';
import './blockSelect.css'
const { Option } = Select;
export default class BlockSelect extends Component {

  static propTypes = {
    
  }
  constructor(props) {
    super(props)
  }

  state = {
    
  }
  getPopupContainer = () => document.querySelector('.selectContainer')

  render() {
    return (
      <section className="selectWrap">
        {
          this.props.label
          ?
          <div className="selectLable">
            {
              this.props.isRequire
              ?
              <span className="require">*</span>
              :
              ''
            }
            <span>{this.props.label}：</span>
          </div>
          :
          ''
        }
        <div className={`selectContainer ${this.props.label ? 'lableSpace' : ''}`} style={{...this.props.style}}>
          {
            <Select 
              dropdownClassName={'drop-down-color'}
              getPopupContainer={()=>document.querySelector('.selectContainer')}
              className={`${this.props.higher ? 'isHigher' : ''}`}
              style={{ width: '100%' }}
              suffixIcon={<Icon type="caret-down" style={{color: '#1EE1FF'}} />}
              onChange={(e) => this.props.onClick && this.props.onClick(e)}
              {...this.props}
            >
              {
                this.props.data && Array.isArray(this.props.data) && this.props.data.map((item, index)=>{
                  return (<Option value={item.val} key={item.key}>{item.text}</Option>)
                })
              }
            </Select>
          }
        </div>
      </section>
    )
  }

  componentDidMount(){

  }

}

/**
 * 同Ant design中的Select
 * param       type       注   
 * label       string     表单的label
 * higher      boolean    高亮状态
 * isRequire   boolean    是否必须标志
 * data        array      渲染Option的数据源
*/
