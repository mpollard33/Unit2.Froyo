const yogurt = {
  vanilla: 0,
  chocolate: 0,
  strawberry: 0,
  coffee: 0,
};

// Count for each flavor
// vanillaCount = 0;
// chocolateCount = 0;
// strawberryCount = 0;
// coffeeCount = 0;

const userInput = prompt (
  'Please list each flavor of yogurt to order (seperated by a comma)'
);

const flavors = userInput.split (',');
//  create an array of flavor choices based on userInput

for (const flavor of flavors) {
  if (yogurt.hasOwnProperty (flavor.toLowerCase ())) yogurt[flavor]++;
}

for (const flavor in yogurt) {
  console.log (`${flavor}: ${yogurt[flavor]}`);
}
