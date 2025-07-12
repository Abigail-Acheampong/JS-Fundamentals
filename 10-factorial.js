function factorial(firstArg) {
 if (isNaN(Number(firstArg))) {
   console.log("1");
 }
 else {
   let result = 1;
   for (let i = 1; i <= parseInt(firstArg); i++) {
     result *= i;
   }
   console.log(result);
 }
}

firstArg = process.argv[2];
factorial(firstArg);
 