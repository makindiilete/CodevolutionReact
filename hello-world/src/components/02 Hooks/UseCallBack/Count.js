import React, { useEffect, useState } from "react";

function Count({ text, count }) {
  console.log(`Rendering ${text}`);
  return (
    <div>
      <p>
        {text} - {count}
      </p>
    </div>
  );
}

export default React.memo(Count);
