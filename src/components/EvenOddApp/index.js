// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  increment = () => {
    const {count} = this.state
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    const numType = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="container">
          <h1>Count {count}</h1>
          <p>Count is {numType}</p>
          <button className="button-1" onClick={this.increment}>
            Increment
          </button>
          <p>*Increase By Random Number between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
