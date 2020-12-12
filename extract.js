// Pluck
const data = [{id: 1}, {id: 2}];
const pluck = (key) => (object) => object[key];

console.log(data.map(pluck('id')));
