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

const arr = [1, 2 , 3];
const arr2 = [...arr];
console.log(...arr);

// Generators
function* hello(){
    console.log('Hello');
    yield 1;

    console.log('From');
    yield 2;

    console.log('Function');
    yield 'End';
}

const it = hello();
console.log(it.next());
console.log(it.next());
console.log(it.next());

//promises and callbacks - Aprofundar
const doSomethingPromise = () =>
new Promise((resolve, reject) =>{
    setTimeout(function() {
    //did something
    resolve('First data');
    }, 1000);
});

const doOtherThingPromise = () =>
new Promise((resolve, reject) =>{
    setTimeout(function (){
        //did something
        resolve('Second data');    
    }, 1000);
});

doSomethingPromise()
.then(data => {
    console.log(data.split(''));
    return doOtherThingPromise();
})
.then(data2 => console.log(data2.split('')))
.catch(error => console.log('Ops', error));

