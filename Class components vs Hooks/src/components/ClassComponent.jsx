import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.tambah = this.tambah.bind(this);
    this.kurang = this.kurang.bind(this);
  }

  tambah() {
    this.setState({ count: this.state.count + 1 });
  }
  kurang() {
    this.setState({count:this.state.count - 1})
  }

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.tambah}>+</button>
        <button onClick={this.kurang}>-</button>
      </div>
    );
  }
}

export default ClassComponent;
