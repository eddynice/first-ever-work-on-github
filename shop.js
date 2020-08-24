import React, { Component } from 'react'

export default class Shop extends Component {
    state ={ value:0 }

    increament =() => {
        this.setState ({
            value: this.state.value +1
        })
    }
    decrement =() =>{
        this.setState(prevState =>({
            value: prevState.value -1
        }))
    }
    render() {
        return (
            <div>
                {this.state.value}
                <button onClick={this.increament}>Plus</button>
                <button onClick={this.decrement} >   Minus  </button>
            </div>
        )
    }
}
