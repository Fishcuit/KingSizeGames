// test.js

function isStraight(pokerHand) {
  const cardValues = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  let values = pokerHand.map((card) => card.value);
  let wildCount = values.filter((value) => value === "0").length;
  values = values.filter((value) => value !== "0");
  values.sort((a, b) => cardValues.indexOf(a) - cardValues.indexOf(b));

  for (let i = 0; i < values.length - 1; i++) {
    if (values[i] === values[i + 1]) {
      return false;
    }
    const difference =
      cardValues.indexOf(values[i + 1]) - cardValues.indexOf(values[i]);
    if (difference !== 1) {
      if (wildCount >= difference - 1) {
        wildCount -= difference - 1;
      } else {
        return false;
      }
    }
  }
  return true;
}

  
  // Test cases
  const exampleHand1 = [
    { suit: "Hearts", value: "3", imgSource: "Hearts_3.png", payOut: 0 },
    { suit: "Diamonds", value: "3", imgSource: "Diamonds_3.png", payOut: 0 },
    { suit: "Hearts", value: "7", imgSource: "Hearts_7.png", payOut: 0 },
    { suit: "Hearts", value: "5", imgSource: "Hearts_5.png", payOut: 0 },
    { suit: "Wild", value: "0", imgSource: "JK.png", payOut: 0 },
  ];
  
  const exampleHand2 = [
    { suit: "Hearts", value: "10", imgSource: "Hearts_10.png", payOut: 0 },
    { suit: "Spades", value: "J", imgSource: "Spades_J.png", payOut: 1 },
    { suit: "Clubs", value: "Q", imgSource: "Clubs_Q.png", payOut: 2 },
    { suit: "Diamonds", value: "K", imgSource: "Diamonds_K.png", payOut: 3 },
    { suit: "Diamonds", value: "A", imgSource: "Diamonds_A.png", payOut: 4 },
  ];
  
  // Display the results
  console.log("exampleHand1 is straight:", isStraight(exampleHand1));
  console.log("exampleHand2 is straight:", isStraight(exampleHand2));
  