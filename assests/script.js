// Password Generation JAVASCRIPT
var canceled = false;
var lowerCase = false;
var upperCase = false;
var specialChar = false;
var includeNum = false;
var characters = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  specialChar: " !#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
  oneThroughNine: "0123456789"
}

function generatePassword() {
  //Gets all the inputs for generating the password
  canceled = false;
  while (true) {
    var length = window.prompt("Please enter the length of your password which can be between 8 - 128 characters long.");
    if (length == null) { //if the player hits cancel, it exits and does not change current text desplayed.
      canceled = true;
      break;
    }
    length = Number(length);
    if (length < 8 || length > 128) {
      window.alert("ERROR: Please enter a password length value between 8 and 128 characters long.");
    }
    else {
      lowerCase = window.confirm("Do you want the password to contain lower case letters?");
      upperCase = window.confirm("Do you want the password to contain upper case letters?");
      specialChar = window.confirm("Do you want the password to contain special characters?");
      includeNum = window.confirm("Do you want the password to contain numbers?");
      if ((lowerCase === false && upperCase === false) && (specialChar === false && includeNum === false) ){
        window.alert("ERROR: You must pick at least one type of character to include in the password!");
      }
      else {
        return passwordCreator(length);
      }
    }
  }
}

function passwordCreator(length) {
  //Generates a password passed on responses from generatePassword
  var password = [];
  var indexOf = 0;
  var passwordIndex = 0;

  while (length > 0){
    var index = randomBettween(4, 1) ; //desides wheather to add a lowerCase, Upper, special or number

    if (index === 1) {
      if (lowerCase) {                                      //will only add if lowerCase was selected as an option
        indexOf = randomBettween(26, 0);                    //picks a random letter from characters.lower string
        password[passwordIndex] = characters.lower[indexOf];// adds new lower case letter to password array
        passwordIndex ++;                                   //Makes sure the next character will not replace the last one.
        length --;                                          // if it was selected will minus 1 from length 
      }
      else { // if lower case was not selected will do nothing. This isn't needed but looks nice
        continue;
      }
    }
    // Comments above apply to following else if's
    else if (index === 2) {
      if (upperCase) {
        indexOf = randomBettween(26, 0);
        password[passwordIndex] = characters.upper[indexOf];
        passwordIndex ++;
        length --; 
      }
      else {
        continue;
      }
    }

    else if (index === 3) {
      if (specialChar) {
        indexOf = randomBettween(32, 0);
        password[passwordIndex] = characters.specialChar[indexOf];
        passwordIndex ++;
        length --; 
      }
      else {
        continue;
      }
    }

    else if (index === 4) {
      if (includeNum) {
        indexOf = randomBettween(10, 0);
        password[passwordIndex] = characters.oneThroughNine[indexOf];
        passwordIndex ++;
        length --; 
      }
      else {
        continue;
      }
    }
  }

  password = password.join(""); //Makes the password array in to a single string
  return password;
}

function randomBettween(itemsTotal, startNumber) {
  return Math.floor(Math.random() * itemsTotal + startNumber);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (!canceled) { //If the user selects cancel when prompted for a length it will leave the text currently being displayed
  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
