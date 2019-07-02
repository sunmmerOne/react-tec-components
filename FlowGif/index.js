import React, {Component} from 'react'
import './style.scss'

export default class FlowGif extends Component {
  constructor (props) {
    super(props)
  }
  componentWillMount () {
  }
  render () {
    let { sender, isGifMove, text } = this.props
    let color = isGifMove ? '#46FF91' : '#fff'
    return (
      <div className={`flow-gif-wrap ${sender}-gif-content`}>
        <div className="position">
          {
            isGifMove
              ? <img className="flow-gif" src={require(`@client/assets/gif-higher-${sender}.png`)} alt=""/>
              : <img className="flow-gif" src={require(`@client/assets/gif-sender-${sender}.png`)} alt=""/>
          }
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
