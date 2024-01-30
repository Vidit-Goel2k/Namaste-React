import { Component } from "react"
import { useRouteError } from "react-router-dom"


const Error = () => {
  const error = useRouteError()
  return (
    <div>
        <h1>Oops something went wrong!</h1>
        <h2>{error.status} : {error.statusText}</h2>
    </div>
  )
}
export default Error


//* For Experiment Purposes.
// class Error extends Component{
//   constructor(props){
//     super(props)
//     console.log(this.props.name + 'Child Constructor')
//   }
  
//   componentDidMount(){
//     // Api Calls
//     console.log(this.props.name + 'Child Component Did Mount')
//   }
  
//   render(){
//     console.log(this.props.name + 'Child Render')    
//     return (
//       <div>
//           <h1>Oops something went wrong!</h1>
//       </div>
//     )
//   }
// }
// export default Error
