import React, { useEffect } from "react";
// importing regular css
import "./cssmodule.css";
//Importing css module
import styles from "./cssmodule.module.css";

const CssModule = (props) => {
  return (
    <div>
      {/*  Using classes defined inside the css module file */}
      <h1 className={styles.success}>CssModule</h1>
      <h1 className="error">Error</h1>
    </div>
  );
};

export default CssModule;
