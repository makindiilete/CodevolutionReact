/*
A fragment allows you group elements together without adding an extra node (e.g. extra tag) in the dom...

#   A fragment can receive one and only attribute which is the 'key' attribute when used to map a list

#   You can use shorthand syntax of <> </> instead of the <React.Fragment> </React.Fragment> but with a limitation that you cannot use the key attribute inside the shorthand syntax
*/

//FragmentDemo.js
import React, { useEffect } from "react";

const FragmentDemo = (props) => {
  return (
    <React.Fragment>
      <h1>Fragment Demo</h1>
      <p>This describes the Fragment Demo component</p>
    </React.Fragment>
  );
};

export default FragmentDemo;

//FragmentTable.js
import React, { useEffect } from "react";
import FragmentColumns from "./FragmentColumns";

const FragmentTable = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <FragmentColumns />
        </tr>
      </tbody>
    </table>
  );
};

export default FragmentTable;

//FragmentColumns.js
import React, { useEffect } from "react";

const FragmentColumns = (props) => {
  const items = [];
  return (
    <React.Fragment>
      {/*  {items.map(item => (
            <React.Fragment key={item.id}>
                <h1>Title</h1>
                <h3>Body</h3>
            </React.Fragment>
        ))}*/}
      <td>Name</td>
      <td>Michaelz</td>
    </React.Fragment>
  );
};

export default FragmentColumns;
