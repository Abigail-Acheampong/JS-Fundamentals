const number = process.argv[2];

if (isNaN(Number(number))) {
  console.log("Missing size");
  }
else {
  for (let i = 0; i < parseInt(number); i++) {
    console.log('X'.repeat(parseInt(number)));
  }
}