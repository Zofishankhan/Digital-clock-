const hrs = document.querySelector(".hours");
const mins = document.querySelector(".minutes");
const secs = document.querySelector(".seconds");




let x = setInterval(()=>{
    let curr_time=new Date();
    hrs.innerText = (curr_time.getHours()<10?"0":"") + curr_time.getHours() + " : ";
    mins.innerText = (curr_time.getMinutes()<10?"0":"") +  curr_time.getMinutes() + " : ";
    secs.innerText = (curr_time.getSeconds()<10?"0":"") +  curr_time.getSeconds();
},1000)
