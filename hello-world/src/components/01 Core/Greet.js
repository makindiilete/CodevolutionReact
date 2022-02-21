import React from "react";

//Destructuring inside the function paramater
export const Greet = ({ children, heroName, name }) => {
  //OR as a variable
  // const {children, heroName, name} = props
  return (
    <>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
      {/*  With props.children, we can access the content passed btw the opening and closing tag of this component*/}
      {children}
    </>
  );
};
