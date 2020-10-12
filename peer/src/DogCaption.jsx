import React, { useState } from "react";

const DogCaption = ({ name }) => {
  const [number, numberSet] = useState(4);

  return (
    <div>
      You should adopt {name} because she/he is very cute! A number is {number}.
    </div>
  );
};

export default DogCaption;

/*
// with the following code do not need to externalize react 

export default class DogCaption extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 20 };
  }

  render() {
    return (
    );
  }
}
*/
