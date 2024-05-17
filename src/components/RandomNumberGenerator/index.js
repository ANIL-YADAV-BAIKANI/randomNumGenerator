import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}
  onGenerate = () => {
    const {count} = this.state
    let randomNumber = Math.floor(Math.random() * 100)
    this.setState(prev => {
      return {count: randomNumber}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" onClick={this.onGenerate}>
            Generate
          </button>
          <p className="randum-number">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
