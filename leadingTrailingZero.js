let input="000000123423423000";
let remove="leading";
console.log(removeZeros(input,remove));

function removeZeros(input,remove){
    let res="";
    if(remove=="trailing"){
        let start=0;
        let end;
       
       for (let i=input.length-1; i>=0; i--){
           if(input.charAt(i)==0 && input.charAt(i-1)!=0){
               end=i-1;
               break;
           }
       }
       res=input.slice(start,end);
       return res;
    }
    else{
        let end=input.length-1;
        let start;
        for (let i=0; i<input.length; i++){
           if(input.charAt(i)==0 && input.charAt(i+1)!=0){
               start=i+1;
               break;
           }
       }
       res=input.slice(start,end);
       return res;
    }
}