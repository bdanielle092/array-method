const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

const planetEl = document.getElementById("planets")
planets.forEach(planet => {
    planetEl.innerHTML += `
    <h1>${planet}</h1>`
})




/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.
    
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
// charAt(0) is returning just the first letter. toUpperCase capitalize the letter. slice(1) returns the string excludeing everything before index 0
const letters = planets.map(planet => planet.charAt(0).toUpperCase() + planet.slice(1))
letters.forEach(planet => {
    planetEl.innerHTML += `
    <h1>${planet}</h1>`
})

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.
    

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
// The filter is going through the list and the includes is only showing planets that have an e in them 
const E = planets.filter(planet => + planet.includes("e"))
E.forEach(planet => {
    planetEl.innerHTML += `
    <h1>${planet}</h1>`
})