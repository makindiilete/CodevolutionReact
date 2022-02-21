import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // Short circuit operator
    return this.state.isLoggedIn && <div>Welcome Michaelz</div>;

    /*
       // Ternary expression
       return this.state.isLoggedIn ? (
          <div>Welcome Michaelz</div>
        ) : (
          <div>Welcome Guest</div>
        );*/

    /*    //ELEMENT VARIABLE
            let message;
            if (this.state.isLoggedIn) {
              message = <div>Welcome Michaelz</div>;
            } else {
              message = <div>Welcome Guest</div>;
            }
            return <div>{message}</div>;*/

    /*
       IF.... ELSE
       if (this.state.isLoggedIn) {
          return (
            <div>
              <p>Welcome Michaelz</p>
            </div>
          );
        } else {
          return (
            <div>
              <p>Welcome Guest</p>
            </div>
          );
        }*/
  }
}

export default ConditionalRendering;
