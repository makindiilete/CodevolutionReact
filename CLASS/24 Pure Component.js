/*
A regular component will re-render everytime the state gets updated even if it gets updated with the same value...

A pure component will do a 'shallow' comparison of the previous state/props and the new state/props and only updates if it can find a difference between the two.

If the parent passing a prop is a pure component and it does not re-render then the children will also not re-render even if they are not.

Using Pure component can give you a performance boost in certain scenario when unnecessary re-render can cause issue in your app but bear in mind that when dealing with an array in your component, pushing a new item to the array will still not make the component re-render, to make it re-render, you need to return a new array..

#   When making use of pure component, always make sure all the children components are also pure.

#   Please stick to regular component most of the time unless you are seeing a performance hit.
*/
