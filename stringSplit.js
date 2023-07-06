
const str = "numenticaui";
let  j=2;
console.log(splitString(str,j));

function splitString(str,j){
    const arr=[];
    let i=0;
   let k=j;
   while(i<str.length){
     arr.push(str.substring(i,j));
     i=j;
     j=j+k;
   }
   return arr;
}