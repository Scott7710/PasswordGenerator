// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = Number(prompt("Choose between 8 and 128 characters"));
var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase.");
var wantUpper = confirm('Do u want upper characters')
var wantLower = confirm('Do you want lower characters')
var wantNumbers = confirm('Do you want numbers')
var wantSpecial = confirm('Do you want special characters')

var passOptions = []
var upper = ["A","B",'C','D','E','F','G','H', 'I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lower = ["a",'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var numbers = ['0','1','2','3','4','5','6','7','8','9']
var special = ['!','@','#','%','^','&','*']
console.log('pick somoene from the array!!', upper[Math.floor(Math.random() * upper.length)])

if (wantUpper===true){
  console.log("they want upper")
  passOptions = passOptions.concat(upper);
}
if (wantLower===true){
  console.log("they want lower")
  passOptions = passOptions.concat(lower);
}
if (wantNumbers===true){
  console.log("they want numbers")
  passOptions = passOptions.concat(numbers);
} 
if (wantSpecial===true){
  console.log("they want special")
  passOptions = passOptions.concat(special);
}
console.log('this is our passowrd options array~!!!', passOptions)

document.getElementById('generate').addEventListener('click', function () {
  console.log("your password");
  var password = ''
  for (var i = 0; i < length; i++) {
      console.log('looping ??', i)
      password += passOptions[Math.floor(Math.random() * passOptions.length)]
  }
  console.log('this is oyur passowrd',password)
  document.getElementById('password').value=password
});


 console.log('did our password fill up with the right stuff ??', password)

