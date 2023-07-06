
let x=4, limit=5;
console.log(multiply(x,limit));

function multiply(x,limit){
    const res=[];
    for(let i=1; i<=limit; i++){
        res.push(i*x);
    }
    return res;
}