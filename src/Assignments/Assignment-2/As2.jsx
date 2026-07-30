//Use object destructuring to extract title and year in App.js

const movie = { title: "Inception", year: 2010, director: "Nolan" };

const {title, year} = movie;

console.log(`The movie "${title}" was released in ${year}.`);

//Now use destructed object to print out The movie "Inception" was released in 2010.

//Return screenshot from browser and copy of code from App.js