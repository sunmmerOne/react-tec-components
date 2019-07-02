import React, {Component} from 'react'
import './style.scss'

export default class FlowImg extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    let { name, type, text } = this.props
    let color = ''
    if (type === 'default') {
      color = '#1EE1FF'
    } else if (type === 'choosed') {
      color = '#FFEAA1'
    } else {
      color = '#46FF91'
    }
    return (
      <div className={`flow-img-wrap ${name}-content`}>
        <div className="position">
          <img className="flow-img" src={require(`@client/assets/${name}-${type}.png`)} alt=""/>
          <p 
            className="flow-text" 
            style={{color: color, textShadow: `0 0 4px ${color}`}}>
            {text}
          </p>
        </div>
      </div>
    )
  }
}
