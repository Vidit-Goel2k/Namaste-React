import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:0,
            count2:2
        }
    }
    render(){
        const {name, location} = this.props
        const {count, count2} = this.state
        return(
            <div className="member-card">
                <h1>Count: {count}</h1>
                <h1>Count2: {count2}</h1>
                <h3>Name: {name}</h3>
                <h4>Location: {location}</h4>
                <h5>Role: Software Developer Engineer 2</h5>
            </div>
        )
    }
}

export default UserClass