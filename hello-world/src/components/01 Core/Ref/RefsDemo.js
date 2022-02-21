import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    //Creating our ref
    this.inputRef = React.createRef();
    //Creating a callback ref
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    // this.inputRef.current.focus();
    // console.log(this.inputRef);

    /*When using callback ref, we first need to check for null bcos react set d ref to null when components unmounts*/
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }

  /*Here we fetching the value property of the input element containing our ref*/
  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        {/*Attaching our ref*/}
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.cbRef} />
        <button onClick={this.clickHandler}>Click for value</button>
      </div>
    );
  }
}

export default RefsDemo;
