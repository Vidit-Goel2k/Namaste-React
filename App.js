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

// React Element
const jsxHeading = <h1>This is namaste React using JSX</h1> 

// React Functional Component, different syntax 
const HeadingComponent = () => {
    return (
        <div>
            <h1>this is react functional component 1</h1>
            {reactElem}
        </div>
    )
}

// infinite loop in jsx as HeadingComponent has reactElem and reactElem has HeadingComponent
const reactElem = (
    <span> 
        {jsxHeading} 
        Inside a react Element
        {/* <HeadingComponent /> */}
    </span>
)

const HeadingComponent2 = () => (
<div>
    <h1>this is react functional component 2</h1>
</div>
)

const HeadingComponent3 = () => <h1>This is react functional component 3</h1>

// Component composition: nested components
const ParentHeadingComponent = () => (
    <>
        <HeadingComponent />
        <HeadingComponent2 />
        <HeadingComponent2></HeadingComponent2>
        <HeadingComponent3 />
        {HeadingComponent3()}
    </>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<ParentHeadingComponent />) //converts object to html tag

// const data = api.getData()// mallicious js code
// const jsxElement = <div>{data}</div> //jsx prevents XSS attacks by automatically sanitizing the script to be executed and escapes it