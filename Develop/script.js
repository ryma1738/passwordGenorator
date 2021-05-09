// Assignment code here
var lowerCase = false;
var upperCase = false;
var specialChar = false;
var includeNum = false;
var length = 0;

function generatePassword(){
  length = window.prompt("Please enter the length of your password which can be between 8 - 128 characters long.");
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
      return passwordCreator();
    }
  }
}

function passwordCreator() {
  
}

function randomBettween() {
  return Math.floor(Math.random() * min + max);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
