/*
Ref : - Makes it possible to access dom nodes with react component i.e. With ref, you access html elements rendered in the dom inside react component..

One of the most popular use of ref is to set focus of an input

1-  Inside the constructor, create a ref : -   this.inputRef = React.createRef()
2-  Attach this ref to your input element inside the render method
3-  Call the focus method in this ref
*/

//Ref method 1
import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    //Creating our ref
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
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
        <button onClick={this.clickHandler}>Click for value</button>
      </div>
    );
  }
}

export default RefsDemo;

//Ref method 2 ==> Call back ref

import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    //Creating a callback ref
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    /*When using callback ref, we first need to check for null bcos react set d ref to null when components unmounts*/
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }

  render() {
    return (
      <div>
        {/*Attaching our ref*/}
        <input type="text" ref={this.cbRef} />
      </div>
    );
  }
}

export default RefsDemo;
