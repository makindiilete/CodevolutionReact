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
