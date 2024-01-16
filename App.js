const heading = React.createElement( //object
    "h1", // html tag    
    //props
    {
        id: "heading" // attributes
    }, 
    "Hello World from React!" //children
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading) //converts object to html tag