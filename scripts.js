// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
takeoff.addEventListener("click",event=>{
    var msg;
    var a=confirm(" Confirm that the shuttle is ready for takeoff.")
    if (a==true){
        document.getElementById("flightStatus").innerHTML="Shuttle in flight."
      document.getElementById("shuttleBackground").style.backgroundColor = "blue";}
})
landing.addEventListener("click",event=>{
    document.getElementById("shuttleBackground").style.backgroundColor = "green";
   
    alert("The shuttle is landing. Landing gear engaged.")
    document.getElementById("flightStatus").innerHTML= "The shuttle has landed."
       
})
missionAbort.addEventListener("click",event=>{
    var c=confirm("Confirm that you want to abort the mission.")
    if (c==true){
        document.getElementById("flightStatus").innerHTML="Mission Aborted."
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
    }
})
}
window.addEventListener("load",init)