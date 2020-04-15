// Creat the magic
var magicNum = 26;

// Ask user magic number
var stringMagic = prompt("Whats the magic number?");
var magic = Number(stringMagic);

// Check if the magic is right
if (magic === magicNum) {
    alert("🌟 Your SMART!😊 💯%");
}
// Check if guess is higher?
else if (magic > magicNum){
    alert("✖️ Your High, Unlucky!👎 guess again");
}
// Check if guess is low?
else {
    alert("✖️ Your Low, Unlucky!👎 guess again");
}
