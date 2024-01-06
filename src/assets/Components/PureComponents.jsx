import React, { PureComponent } from 'react'

export class PureComponents extends PureComponent {
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
        <h1>Pure Components</h1>
        <h2>{this.state.count}</h2>   
        <br />
        <button onClick={this.handletoggle}>Toggle</button>
        <button onClick={this.counthandler}>Count</button>
        </div>
    )
  }
}

export default PureComponents