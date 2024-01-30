import { Component } from "react"
import User from "./User"
import UserClass from "./UserClass"

// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
class AboutUs extends Component{
  constructor(props){
    super(props)
    // console.log('Parent Constructor')
  }

  componentDidMount(){
    // Api Calls
    // console.log('Parent Component Did Mount')
  }

  render(){
    // console.log('Parent Render')
    return (
      <div>
        <h1>About Us</h1>
        <h2>Team</h2>
        <UserClass name={'Outer '} location={'Ghaziabad (Class)'} />
        {/* <UserClass name={'Second '} location={'Ghaziabad (Class)'} /> */}
        {/* {console.log('Parent Render Finished')} */}
      </div>
    )
  }
}

// const AboutUs = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>Team</h2>
//       {/* <User name={'Vidit Goel (Functional)'} location={'Ghaziabad (Functional)'} /> */}
//       <UserClass name={'Vidit Goel (Class)'} location={'Ghaziabad (Class)'} />
//     </div>
//   )
// }

export default AboutUs