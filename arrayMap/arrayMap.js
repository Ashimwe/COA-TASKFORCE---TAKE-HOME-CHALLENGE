const arr=[4,5,6,3,5];
const target= 9;
let sum = 0;
for(let i = 0;i < arr.length;i++){
    if (arr[i] === target){
        console.log(arr[i] + " is a subarray that adds up to " + target);
    }
    else if(arr[i] > 9){
        return false;
    }
    else{
        sum+=arr[i];
        if(sum === target){
            console.log("Yes there's a subarray that adds up to " + target );
        }
    }
}