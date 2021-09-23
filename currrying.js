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


console.log("teste".slice(0,-1));