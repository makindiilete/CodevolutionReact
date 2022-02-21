import React, { useCallback, useEffect, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

export function ParentComponent(props) {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  /*Now with useCallback, only when value of age changes r we're going to av d component re-rendered bcos we specified it as our dependency*/
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  /*Now with useCallback, only when value of salary changes r we're going to av d component re-rendered bcos we specified it as our dependency*/
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </>
  );
}
