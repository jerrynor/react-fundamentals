//In this assignment use .filter array method for printing out only active users from given users array.

const users = [

  { name: 'Anna', active: true },

  { name: 'Tom', active: false },

  { name: 'Luna', active: true }

];

//  Return only users who are active

const activeUsers = users.filter(user => user.active);

console.log(activeUsers.map(user => user.name).join(", "));

// The answer should be - { name: 'Anna', active: true }, { name: 'Luna', active: true }

//Return screenshot from browser and copy of code.