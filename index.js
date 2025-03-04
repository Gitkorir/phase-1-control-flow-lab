// index.js

function scuberGreetingForFeet(distance) {
  // Write your code here!
  if (distance <= 400) {
    return "This one is on me!"; // Corrected capitalization
  } else if (distance > 400 && distance <= 2000) {
    return "That will be twenty bucks."; // Corrected capitalization and text
  } else if (distance > 2000 && distance <= 2500) {
    return "I will gladly take your thirty bucks."; // Corrected capitalization
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  return city === "NYC" ? "Ok, sounds good." : "No go."; // Corrected city name and added period
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  switch (tip) {
    case "generous":
      return "Thank you so much."; // Corrected "Thankyou" to "Thank you" and added space
    case "not as generous":
      return "Thank you."; // Corrected "Thankyou" to "Thank you"
    default:
      return "Bye."; // Corrected capitalization and added period
  }
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    scuberGreetingForFeet,
    ternaryCheckCity,
    switchOnCharmFromTip,
  };
}
