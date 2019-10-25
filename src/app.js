/*const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", { key: 'Luna' }, "Luna"),
        React.createElement("h2", { key: 'Dog' }, "Dog"),
        React.createElement("h2", { key: 'Havanese' }, "Havanese")
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

ReactDOM.render(React.createElement(App), document.getElementById("root"));*/

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", { key: "Pet 0" }, "Adopt Me!"),
    React.createElement(
      Pet,
      {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese"
      },
      { key: "Pet 1" }
    ),
    React.createElement(
      Pet,
      {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockatiel"
      },
      { key: "Pet 2" }
    ),
    React.createElement(
      Pet,
      {
        name: "Doink",
        animal: "Cat",
        breed: "Mixed"
      },
      { key: "Pet 3" }
    )
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
