import React from "react";
import Header from "./components/Header";

import DogeImage from "host/DogImage";

const App = () => (
  <div>
    <DogeImage />
    <Header>Hi there, I'm React from Webpack 5.</Header>;
  </div>
);

export default App;
