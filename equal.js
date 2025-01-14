
let a = 10;
function change(b){
    b = 9;
    console.log(b)
}
change(a)
console.log(a)

function changeName(person){
    person.name = "Rahim";
    console.log(person.name)
}
const person = {name: "Karim"};
changeName(person)
console.log(person.name)

function checkTruthyFalsy(value) {
    if (value) {
        console.log(`The value '${value}' is Truthy.`);
    } else {
        console.log(`The value '${value}' is Falsy.`);
    }
}
checkTruthyFalsy(undefined)
let p = 'js';
let q = p;
p = "React";
console.log(q)

const isTrue=true;
console.log(!isTrue ? "hello" : "world")

const sum =(p, q)=> {
    p + q;
   }
   const result = sum(2, 3);
   console.log(result);
   function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32);