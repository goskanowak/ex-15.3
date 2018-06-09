// Ex 1
const hello = 'Hello';
const world = 'World!';

console.log(`${hello}, ${world}`);

// Ex 2
const multiply = (x = 1, y = 1) => x*y;

console.log(multiply(2, 5));
console.log(multiply(6, 9));
console.log(multiply(2));

// Ex 3
const average = (...args) => { return args.reduce((x,y) => (x+y)/args.length
)};

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 9, 1, 8));

//Ex 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

//Ex 5 
const data = [1, 4, 'Iwona', false, 'Nowak'];
const [id, , firstname, , lastname] = data;

console.log(`${id}, ${firstname}, ${lastname}`);