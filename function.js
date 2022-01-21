function fn(){
    return 'Code Here';
}

const arrowFn = () => 'Code Here';
const arrowFn2 = () =>{
    return 'Code here';
}

fn.prop = 'Posso criar Propriedades';

console.log(fn());
console.log(fn.prop);
console.log(typeof fn());

function sum (...args){
    console.log(args);
    console.log(arguments);
}
console.log(sum(5,5,5,2,3));

const uniqueId = Symbol();

console.log(uniqueId);

const obj = {
    values: [1,2,3,4],
    [Symbol.iterator](){

    }
}

console.log(obj);