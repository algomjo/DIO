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