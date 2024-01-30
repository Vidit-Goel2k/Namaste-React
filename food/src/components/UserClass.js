import React from "react"
import Error from "./Error"

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userInfo:{},
        }
        // console.log(this.props.name + 'Child Constructor')
    }
    
    async componentDidMount(){
        // Api Calls
        // console.log(this.props.name + 'Child Component Did Mount')
        // const data = await fetch("https://api.github.com/users/Vidit-Goel2k")
        // const json = await data.json()
        // console.log(json)
        // this.setState({
        //     userInfo: json
        // })
        // this.timer = setInterval(()=>{
        //     console.log('first')
        // },1000)
    }

    componentDidUpdate(){
        console.log('Component Did Update')
    }

    componentWillUnmount(){
        console.log('Component Will Unmount')
        // clearInterval(this.timer)
    }
    
    render(){
        // console.log(this.props.name + 'Child Render')    
        // const {name, location} = this.props
        const { name, location, avatar_url } = this.state.userInfo
        return(
            <div className="member-card">
                {/* <Error name={'Inner '} /> */}
                {/* <h1>Count: {count}</h1>
                <button onClick={()=>{
                    // Never Update State Variables Directly this.state.count = this.state.count + 1
                    this.setState({
                        // count:count+1
                        count:this.state.count + 1
                    }) 
                }}>Click to increase count</button> */}
                <h3>Name: {name}</h3>
                <img src={avatar_url} alt="github avatar" />
                <h4>Location: {location}</h4>
                <h5>Role: Software Developer Engineer 2</h5>
            </div>
        )
    }
}

export default UserClass