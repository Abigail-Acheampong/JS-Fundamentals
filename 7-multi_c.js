const firstArg = process.argv[2];

for(let i = 0; i < parseInt(firstArg); i++) 
 {
 if (!isNaN(Number(firstArg)))
  {console.log("C is fun");}
}
if (isNaN(Number(firstArg)))
 {console.log("Missing number of occurences");}
 

