function oClock(){
    const time = new Date()
    let hour = time.getHours() 
    let minut = time.getMinutes();
    let second = time.getSeconds()
    console.log(hour)
   document.querySelector(".hour").innerHTML = hour.toString().length === 1 ? "0"+ hour : hour + " " +":"
   document.querySelector(".minut").innerHTML = minut.toString().length === 1 ? "0"+ minut : minut 
   document.querySelector(".seconds").innerHTML = second.toString().length === 1 ? "0" + second : second 


}
setInterval(oClock,1000)