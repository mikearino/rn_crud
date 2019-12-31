const margieGenerator = () => {
  const numberArray = [];
  for (i = 1; i <= 100; i++) {
    numberArray.push(i);
    if ([i] % 5 == 0 && [i] % 3 == 0) {
      numberArray.splice([i] - 1, 1, "Ouch my arm");
    } else if ([i] % 3 == 0) {
      numberArray.splice([i] - 1, 1, "The roads are icy");
    } else if ([i] % 5 == 0) {
      numberArray.splice([i] - 1, 1, "I need more vitamins");
    }
  }
  console.log(numberArray);
};

margieGenerator();
