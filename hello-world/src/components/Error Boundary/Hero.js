import React, { useEffect, useState } from "react";

export function Hero({ heroName }) {
  if (heroName === "Joker") {
    throw Error("Not a hero");
  }
  return <div>{heroName}</div>;
}
