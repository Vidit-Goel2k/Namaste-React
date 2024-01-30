import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }
    render(){
        const {name, location} = this.props
        const { count } = this.state
        return(
            <div className="member-card">
                <h1>Count: {count}</h1>
                <button onClick={()=>{
                    // Never Update State Variables Directly this.state.count = this.state.count + 1
                    this.setState({
                        // count:count+1
                        count:this.state.count + 1
                    }) 
                }}>Click to increase count</button>
                <h3>Name: {name}</h3>
                <h4>Location: {location}</h4>
                <h5>Role: Software Developer Engineer 2</h5>
            </div>
        )
    }
}

export default UserClass