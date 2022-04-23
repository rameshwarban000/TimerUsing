const endDate= "25 April 2022 12:00 AM";
document.getElementById("end-date").innerText = endDate;
// const clock = () => {

// }
const inputs= document.querySelectorAll("input");
function clock(){
    const end = new Date(endDate);
    const now =  new Date();
    // console.log(end);
    // console.log(now);
    const diff = (end - now)/1000;
    console.log(diff);
    console.log(Math.floor(diff/3600/24)); 
    inputs[0].value= Math.floor(diff/3600/24);
    console.log(Math.floor(diff/3600)%24);
    inputs[1].value=Math.floor(diff/3600)%24;
    // calculate minutes
    inputs[2].value=Math.floor(diff/60)%60;
    //  calculate Seconds
    inputs[3].value=Math.floor(diff)%60;
    // conver into days
}
//1 day =24 hours
//  1 hour = 60 min
//  60 min= 3600 sec;
clock();
setInterval(
    () => {
        clock()
    },1000
)