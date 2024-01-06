import React, { Component } from 'react'

export default class SimpleComponents extends Component {
    constructor(){
        super()
        this.state={
            count:0,
            toggle:true
        }
    }

    counthandler=()=>{
        this.setState({count: this.state.toggle? this.state.count+1:this.state.count})
    }

    handletoggle=()=>{
        this.setState({toggle: !this.state.toggle})
    }
  render() {
    console.log("render")
    return (

      <div>
        <h1>Simple Components</h1>
        <h2>{this.state.count}</h2>   
        <br />
        <button onClick={this.handletoggle}>Toggle</button>
        <button onClick={this.counthandler}>Count</button>
        </div>
    )
  }
}
