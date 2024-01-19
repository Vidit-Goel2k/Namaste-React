import React from 'react'
import ReactDOM from 'react-dom/client'

/** 
 * div #parent
 *  h1
 *  div #child1
 *      h2
 *      p 
*/
const heading = React.createElement( //object
    "h1", // html tag    
    //props
    {
        id: "heading" // attributes
    }, 
    "Hello World from React!" //children
)

// JSX -> babel transpiles into React.createElement() -> React Element (object) -> Html element (on render)

const jsxHeading = <h1>This is namaste React using JSX</h1>


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(jsxHeading) //converts object to html tag
