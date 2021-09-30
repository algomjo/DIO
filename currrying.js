function soma(a) {
    return function(b){
        return a+b;
    }
}

const soma2 = soma(2);

console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));

const num = 11.12345;
console.log(num.toFixed(3));
const undef
console.log(typeof num);
console.log("teste".slice(0,-1));

let user ={
    name: "Alexandre",
    lastName: "Gomes",
    work: "DEV"
};



console.log("User entries: ",Object.entries(user));
console.log("User keys: ",Object.keys(user));
Object.assign(user, {fullName: 'Alexandre Gomes'});
console.log("User assign 1: ",user);
console.log("User assign 2: ",Object.assign({},user, {age: 26}));
console.log(typeof user);