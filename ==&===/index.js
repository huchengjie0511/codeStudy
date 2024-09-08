console.log(true==1); // true

console.log('55'==55);// true
console.log('44'==55);// false

console.log('55asfa'==55);// false

console.log(null==undefined);// true

const a={ name: 'a', age: 1, valueOf: function(){ return 1; } };

console.log(a==1); // false
console.log(a.valueOf())

const b = { name:'b'}
const c = { name:'b'}
const d= b;
console.log(b==c); // false
console.log(d==b); // true