let span=document.querySelector(".main-section1 span ");
let myname="GROW Up";
let gamal="gamal";
let index=1;
function text(){
span.textContent=myname.slice(0,index);
index++;
if(index > myname.length)
{
    index=1;
    
}


}
setInterval(function()
{
    text(); 
},700);




//start counter protfolie
let valuedisplays=document.querySelectorAll(".protfolie-3 h2");
let interval=5000;
valuedisplays.forEach((valuedisplays)=>{
    let startvalue=0;
    let endvalue=parseInt(valuedisplays.getAttribute("data-val"));
let duration =Math.floor(interval/endvalue);
let counter=setInterval(function(){
    startvalue+=1;
    valuedisplays.textContent=startvalue;
    if(startvalue==endvalue)
    clearInterval(counter);
},duration)

})
//end counter protfolie




