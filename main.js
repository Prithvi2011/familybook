var images=["father.png","mother.png","brother.jpg","me.jpg"];
var names=["Girish Mantur","Sudarshini Mantur","Prithvi Mantur","Adarsh Mantur"];
var i=0;
function nextslide(){
  
    document.getElementById("family").innerHTML=names[i];
    document.getElementById("img").src=images[i];
    i++;
    console.log(i);
    if(i==4){
        i=0;
    }
} 
