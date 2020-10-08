import React from "react";

import Header from "./components/Header";
import DogCaption from "./DogCaption";

import DogImage from "host/DogImage";

const App = () => (
  <div>
    <Header>Hi there, I'm React from Webpack 5.</Header>;
    <DogImage />
    <DogCaption name="Lucy" />
  </div>
);

export default App;
