import React, { useEffect } from "react";

const MemoComp = ({ name }) => {
  console.log("Rendering memo functional component");
  return <div>{name}</div>;
};

export default React.memo(MemoComp);
