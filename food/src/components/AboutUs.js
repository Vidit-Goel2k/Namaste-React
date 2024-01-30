import User from "./User"
import UserClass from "./UserClass"

const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2>Team</h2>
      {/* <User name={'Vidit Goel (Functional)'} location={'Ghaziabad (Functional)'} /> */}
      <UserClass name={'Vidit Goel (Class)'} location={'Ghaziabad (Class)'} />
    </div>
  )
}

export default AboutUs