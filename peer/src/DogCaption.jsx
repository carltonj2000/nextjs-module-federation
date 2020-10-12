import React from "react";

export default class DogCaption extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 20 };
  }

  render() {
    return (
      <div>
        You should adopt {this.props.name} because she/he is very cute! A number
        is {this.state.number}.
      </div>
    );
  }
}
