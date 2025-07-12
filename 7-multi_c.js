const firstArg = process.argv[2];

if (isNaN(Number(firstArg))) {
  console.log("Missing number of occurences");
}
else {
 for(let i = 0; i < parseInt(firstArg); i++) {
   console.log("C is fun");
 }
}
