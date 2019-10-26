import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" key="Pet1" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" key="Pet2" />
      <Pet name="Doink" animal="Cat" breed="Mixed" key="Pet3" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
