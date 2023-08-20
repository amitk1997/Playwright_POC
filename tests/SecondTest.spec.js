numbers = [1,2,3,4,5,6]

totalcount = numbers.reduce((sum,total)=>sum+total,0)

console.log(totalcount)


const array = [1, 2, 3, 4, 5];
console.log(array.splice(3,4, 'v','l'));
console.log(array)

console.log(array.join("-"));

array.shift()
console.log(array);