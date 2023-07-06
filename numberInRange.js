let x=10, y=100;
let num=24;
console.log(checkInRange(x,y,num));

function checkInRange(x,y,num){
    if(num<x || num>y){
        return false;
    }
    else{
        return true;
    }
}