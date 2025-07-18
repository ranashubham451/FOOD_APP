// const heading=React.createElement("h1",{id:"heading"},"Hello World");

//     const root=ReactDOM.createRoot(document.getElementById("root"));
//     root.render(heading); 


// in html we create like this 

// <div id="parent">
//     <div id="child">
//     <h1>I Am H1 tag</h1>
// <h2> I am h2 tag</h2>
// </div>
// <div id="child2"></div>
// </div>

const parent = React.createElement(
    "div", { id: "parent" }, [React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "heading" }, "I am H1 Tag"),
        React.createElement("h2", { id: "heading2" }, "I am H2 Tag")]
    ), React.createElement("div", { id: "child2" }, "I am Child 2")]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)

// We Writig a hard code and not understable code we use jsx
