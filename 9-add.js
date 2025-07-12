function add(a,b){
 if (a === undefined || b === undefined)
  {
  console.log("NaN");
  }
 else if (a === undefined && b === undefined) {
  console.log("NaN");
  }
 else {
  console.log(a + b);
 }
}

firstArg = process.argv[2];
secondArg = process.argv[3];

add(Number(firstArg), Number(secondArg));