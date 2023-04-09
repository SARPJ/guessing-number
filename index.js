let number= Math.floor(Math.random()*100);
while(num != number){
var num = prompt("Guss the number");
  if(num == number){
    console.log("correct");
  }
  else if (num > number){
    console.log("too high...");
  }
   else if (num < number){
    console.log("too Low...");
  }
  else{
    console.log("invalid number");
  }
}




