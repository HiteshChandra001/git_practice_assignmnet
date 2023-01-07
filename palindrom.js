let str="racecar";
let bag="";
for(let i=0;i<str.length;i++){
    bag=bag+str[i];
}
if(bag==str){
    console.log('palindrome');
}else{
    console.log('not palindrome');
}