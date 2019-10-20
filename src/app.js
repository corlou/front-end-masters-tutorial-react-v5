const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Luna"),
        React.createElement("h2", {}, "Dog"),
        React.createElement("h2", {}, "Havanese"),
    ]);
};

const App = () => {
    return React.createElement( "div", { id: "something-important"}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, { 
            name: "Luna", 
            animal: "Dog", 
            breed: "Havanese"
            }),
        React.createElement(Pet, { 
              name: "Pepper", 
              animal: "Bird", 
              breed: "Cockatiel"
            }),
        React.createElement(Pet, { 
              name: "Doink", 
              animal: "Cat", 
              breed: "Mixed"
        })
    ]);
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
 );