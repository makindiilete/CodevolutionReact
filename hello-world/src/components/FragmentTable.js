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
