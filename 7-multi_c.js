const firstVar = process.argv[2];

if (isNaN(Number(firstVar))) {
  console.log("Missing number of occurences");
}
else {
 for(let i = 0; i < parseInt(firstVar); i++) {
   console.log("C is fun");
 }
}
