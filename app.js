//Chap : 35 - 38

//Q# 01 . Write a function that displays current date & time in your browser.

// function getTime(){
//     var now = new Date();
//     document.write(now);
// }
// getTime();

//Q# 02  Write a function that takes first & last name and then it greets the user using his full name.

// function getName(){
//     var firstName = prompt("Enter Your First Name");
//     var lastName = prompt("Enter Your Last Name");
//     var fullName = firstName + " " + lastName;
//     document.write(fullName);
// }
// getName();


//Q# 03 . Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// function sum(){
//     var num1 = +prompt("Enter First Number");
//     var num2 = +prompt("Enter Second Number");
//     var result = num1 + num2;
//     document.write(result);
// }
// sum();


//Q# 04 . Calculator:
//Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

// function calculator() {
//     var num1 = +prompt("Enter first number");
//     var num2 = +prompt("Enter second number");
//     var opera = prompt("Enter your operator")
//     if(opera === "*"){
//         document.write(num1 * num2)
//     }
//     else if(opera === "+"){
//         document.write(num1 + num2)
//     }
//     else if(opera === "-"){
//         document.write(num1 - num2)
//     }
//     else if(opera === "%"){
//         document.write(num1 % num2)
//     }
//     else if(opera === "/"){
//         document.write(num1 / num2)
//     }
//     else{
//         alert("Enter a valid operator")
//     }
// }
// calculator();



//Q# 05. Write a function that squares its argument?

// function square(num1){
//     var res = num1 * num1;
//     document.write(res)
// }
// square(4)

//Q# 06. Write a function that computes factorial of a number?

// function factorial(){
//     var num = +prompt("Enter Your Number");
//     if(num === 0 || num === 1)
//     return 1;
//     for(var i = num - 1 ; i >= 1 ; i--){
//         num = num * i
//     }
//     document.write(num);
//     return num;
// }
// factorial();

//Q# 07. Write a function that take start and end number as inputs & display counting in your browser.

// function counting(){
//     var num1 = +prompt("Enter The Starting Number For Counting");
//     var num2 = +prompt("Enter Last Number Of Counting");
//     for (var i = num1 ; i <= num2 ; i++){
//         document.write(i + "</br>" )
//     }
// }
// counting();

//Q# 08
 
// SKIP


// Q# 09. Write a function that calculates the area of a rectangle.

// var height = 5;
// function calculateArea(width , height){
//     var area = width * height;
//     return area
// }
// var r = calculateArea(5, height);
// console.log("Area is " + " " + r + " " + "square.meters");

//Q# 10. Write a JavaScript function that checks whether a passed string is palindrome or not?

// function checkPalindrome(string){
//     var leng = string.length;
//     for (var i = 0 ; i < leng / 2 ; i++){
//         if(string[i] !== string[leng - 1 -i]){
//             return "It Is Not A Palindrome"
//         }
//     }
//     return "It Is A Palindrome"
// }
// var string = prompt("Enter a string").toLocaleLowerCase();
// var value = checkPalindrome(string);
// document.write(value);


// Q# 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 

// function upperCase(str){
//     var word = str.split(' ')
//     for (var i = 0; i < word.length; i++){
//         var firstLetter = word[i].charAt(0).toUpperCase();
//         var restOfLetters = word[i].slice(1);
//         word[i] = firstLetter + restOfLetters ;
//        }

//        var newStr = word.join(' ');
//        return newStr;
//     }

//     var str = prompt("Enter a string");
//     var result = upperCase(str);
//     document.write(result)

// Q# 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 

// function findLongestWord(str1) {
// var word1 = str1.split(' ');
// var longestWord = " ";
// for(var i = 0; i < word1.length; i++){
//     if(word1[i].length > longestWord){
//         longestWord = word1[i];
//     }
// }
// document.write(longestWord)
// return longestWord;

// }
// findLongestWord("Hello how are");


// Q# 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of function | JAVASCRIPToccurrences of the specified letter within the string. 

// function checkOccurance(str2 , letter){
//     var letter_count=0;
//     for(var i = 0; i < str2.length; i++){
//         if(str2.charAt(i) === letter){
//             letter_count += 1;
//         }
//     }
//     document.write(letter_count)
//     return letter_count
// }
// checkOccurance("How are you feeling today brother" , "o")

// Q# 14. The Geometrizer
//part 1

// function calcCicumference(radius){
//     var circumferenceOfCircle = 2 * Math.PI * radius;
//     document.write(circumferenceOfCircle)
//     return circumferenceOfCircle
// }
// var radius = +prompt("Enter radius")
// var result = calcCicumference(radius);

//part2

// function calcArea(radius){
//         var areaOfCircle =  Math.PI * radius * radius;
//         document.write(areaOfCircle)
//         return areaOfCircle
//     }
//     var radius = +prompt("Enter radius")
//     var result = calcArea(radius);

