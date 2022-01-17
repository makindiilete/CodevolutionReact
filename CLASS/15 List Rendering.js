import React, { useEffect } from "react";

const Person = ({ person }) => {
  return (
    <h5>
      I am {person.displayName}, My phone Number is {person.phone} and role is{" "}
      {person.role}
    </h5>
  );
};

const NameList = (props) => {
  const names = ["Bruce", "Diana", "Mike"];
  const persons = [
    {
      _id: "61d604d030ed6369c895066e",
      displayName: "Mckee",
      phone: "+234 (912) 407-2692",
      role: "Customer & Celebrity Access",
    },
    {
      _id: "61d604d0e16db33fa455f7e3",
      displayName: "Hendrix",
      phone: "+234 (861) 430-3480",
      role: "Business access",
    },
    {
      _id: "61d604d0cd4e267ade9cd06e",
      displayName: "Ina",
      phone: "+234 (970) 497-2406",
      role: "Business access",
    },
  ];
  const nameList = names.map((name) => <h2>{name}</h2>);
  const personList = persons.map((person) => <Person person={person} />);
  // return <div>{nameList}</div>;
  return <div>{personList}</div>;
};

export default NameList;
