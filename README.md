## quick-js-fp-wins
quick copy paste js functional programming snippets

# Pluck key from array of objects

const pluck = (key) => (object) => object[key]; 

# usuage

console.log([{id: 1}, {id: 2}].map(pluck('id')));
