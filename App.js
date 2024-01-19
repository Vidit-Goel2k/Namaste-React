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
const parent = React.createElement('div',{id: 'parent'},[
    heading, 
    React.createElement('div', {id: 'child'},[
        React.createElement('h2', {}, 'I am a h2 tag'),
        React.createElement('p', {}, 'This is custom CRA'),       
    ])
])

// Can React be written without JSX? Yes but its very ugly and complicated.
// Need for JSX: unreadable code for complex nested html

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent) //converts object to html tag
