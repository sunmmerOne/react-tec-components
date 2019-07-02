import React, { Component } from 'react'
import './style.scss'

export default class ProvePart extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="wrap">
        <p className="top-title">{this.props.title}</p>
        {
          Object.values(this.props.proveData).map(item => {
            return (
              <div className="line" key={item.id}>
                <span>{item.label}：</span>
                {
                  item.isVerified
                    ? <img className="img" src={require(`@client/assets/pass.png`)} />
                    : <img className="img" src={require(`@client/assets/warn.png`)} />
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}