// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends  Component{
    
    state={
        speed:0,
    }

    onAccelerate = () => {
        const {speed} = this.state
        if (speed < 200) {
            this.setState(prevState => ({speed: prevState.speed + 10}))
            }
        }
}
    onApplyBreak=()=>{
        if(speed>0){
            this.setState(prevState=>(
                {speed:prevState.speed-10}
            )
        }
    }
    render(){
        const {speed}=this.state

        return(
            <div className="container">
                <h1 className="heading">SPEEDOMETER</h1>
                <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" className="img" alt="speedometer"/>
                <h1 className="heading">Speed is {speed}mph</h1>
                <p className="paragraph">Min Limit is 0mph, Max lLimit is 200mph</p>
                <button type="button" className="button-1" onClick={this.onAccelerate}>Accelerate</button>
                <button type="button" className="button-2" onClick={this.onApplyBreak}>Apply Brake</button>
            </div>
         )
    }
}
export default Speedometer