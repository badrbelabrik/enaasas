const prompt = require("prompt-sync")();

let N = Number(prompt("Entrez un nombre de ligne :"));

for (let i=2; i<=N; i++){
     
  let prime = true;
let j;
  for (j = 2; j < Math.sqrt(i); j++) {
    if (i % j === 0) {
      prime = false;
      break;
    }
  }
  if (prime) 
  {
    let count=0; 
    while (count<i){
         process.stdout.write("*");
         count ++;   
    }  
    console.log();
    }

}    
