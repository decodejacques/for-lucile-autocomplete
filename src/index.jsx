import ReactDOM from 'react-dom'
import './main.css'
import React, { Component } from 'react'
let elements = ["abc", "bcd"]
class AutoComplete extends Component {
    constructor() {
        super()
        this.state = {
            userTyped: ""
        }
    }
    handleChange = event => { this.setState({ userTyped: event.target.value }) }
    render = () => {
        let userTyped = this.state.userTyped
        let candidates = elements.filter(e => e.includes(userTyped))
        let autocompleteBox = undefined
        if (userTyped.length > 0 && candidates.length !== 0) {
            autocompleteBox = <div className="autocomplete-container">
                <div className="autocomplete-box">
                    {candidates.map(c => (<div>{c}</div>))}
                </div>
            </div>
        }
        return (<div>
            <form>
                <div className="vertical-flex">
                    <input onChange={this.handleChange} type="text" />
                    {autocompleteBox}
                </div>
                <div>other stuff</div>
            </form>
        </div>)
    }
}
ReactDOM.render(<AutoComplete />, document.getElementById("root"))