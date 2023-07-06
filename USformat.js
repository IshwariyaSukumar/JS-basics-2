let phone=9840164789;
console.log(USformat(phone));

function USformat(phone){
    let phoneNo=phone.toString();
    if(phoneNo.length!=10){
        return "Invalid phoneNo!";
    }
    else{
        let ans="";
        for(let i=1; i<=phoneNo.length; i++){
            if(i==1){
                ans+="(";
            }
            if(i==4){
                ans+=")";
            }
            if(i==7){
                ans+="-";
            }
            ans+=phoneNo.charAt(i-1);
        }
        return ans;
    }
}