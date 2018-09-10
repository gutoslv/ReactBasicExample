import React, { Component } from "react";

class ApiExample extends Component {
  state = {
    data: []
  };

  // Code is invoked after the component is mounter/inserted into
  // the DOM tree
  componentDidMount() {
    const url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result
        });
      });
  }

  render() {
    const { data } = this.state;

    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>;
    });

    return (
      <div>
        <p>The info below is extracted from Wikipedia API</p>
        <ul>{result}</ul>
      </div>
    );
  }
}

export default ApiExample;
