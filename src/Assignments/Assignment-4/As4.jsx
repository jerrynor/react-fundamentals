//Your task is to write .map array method for print out capitalized names from given names array.

// Find how is best way to edit code

const names = ['alice', 'bob', 'carol'];

// Return a new array with names capitalized

const capitalized = names.map(name => name[0].toUpperCase() + name.slice(1));

console.log(capitalized); // The answer should be: ['Alice', 'Bob', 'Carol']

//Return screenshot from browser and copy of code.