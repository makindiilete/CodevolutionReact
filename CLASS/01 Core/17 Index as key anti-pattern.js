/*
Using the index as a key can lead to disaster in certain scenario like when : -
1)  items in your list already contains a unique id
2)  your list is not static and can be updated
3)  your list can be filtered or reordered

#   When you do not specify the key prop when rendering a list, react under the hood use the index as the key...


So only use the index as a key when your keys satisfied opposite of the 3 list conditions above....
*/
