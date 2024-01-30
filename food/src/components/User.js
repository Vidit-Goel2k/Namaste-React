const User = ({name, location}) => {
    return(
        <div className="member-card">
            <h3>Name: {name}</h3>
            <h4>Location: {location}</h4>
            <h5>Role: Software Developer Engineer 2</h5>
        </div>
    )
}

export default User