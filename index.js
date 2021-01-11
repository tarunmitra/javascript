// var num = 30;
// console.log(typeof(num));

// var num = "tarun";
// document.write(typeof num);

// number ke string e convert kora
// var num = 50;
// num = toString(num);
// console.log(typeof(num));

// var num = "tarun";
// num = parseInt(num);
// console.log(typeof(num));

// var num = 20.5;
// num = parseFloat(num);
// console.log(typeof(num));

// var num = 20.5;
// console.log(typeof(num));

// var number = 2.5678;
// console.log(number);

// tofixed holo doshomik er por koto shonkha dkhate chai
// var number = 2.5678;
// console.log(number.toFixed(2));


// toPrecision holo koto golo charecter ace ta randomly dakhano
// var number = 2.5678;
// console.log(number.toPrecision(2));



//  console.log(typeof(Number("12")));
// console.log(typeof(Number(10)));

// boolean data type false er jonne 0 true jonne 1 number e dakhate gale

// console.log(Number(false));
// console.log(Number(true));


//string concatenation

//document.write("Anisul" + " Islam" + " Rubel");

// document.write("Anisul Islam " + "Islam " + "Rubel" + "<br>" + "<br>"); 
// document.write("Tarun mitra " + "Rubel " + "Rofiq");

// var firstName = "Tarun";
// var lastName = " Mitra";
// var fullName = firstName + lastName;
// document.write(fullName);

/*
var firstName = "Tarun";
var lastName = " Mitra";
var fullName = firstName + lastName;
document.write(fullName + "<br>");

var firstName = "Tarun";
var lastName =" mitra";
var fullName = firstName + lastName;
document.write(fullName);
*/



// var firstName = "Tarun";
// var lastName = " Mitra";
// var fullName = firstName + lastName;
// document.write("My name is" + fullName);


//var fullName = "Tarun Mitra";
//document.write(fullName+ " is my name");


// var fullName = "Tarun";
// document.write("My name is "+ fullName + " Mitra");

//  var num1 = 30;
//  var num2 = 40;

//  document.write("Numone = " + num1 + " and Numtwo = " + num2);

// var num1 = 30;
// var num2 = 40;
// document.write("Name one " + num1 + "<br>" + "Number two " + num2);


//Library funtion for string

// var text = "Bangladesh";
// var len = text.length;
// document.write("Number of character " + len);


// var text = "Bangladesh";
// document.write(text.length);

// var text = prompt("Enter your name : ");
// document.write("Number of character " + text.length);

// var text = "Bangladesh";
// document.write(text.charAt(2));

// var text = "Bangladesh";
// var text = text.toUpperCase();
// document.write(text);

// var text = "Bangladesh";
// var text = text.toLowerCase();
// document.write(text);

// var text1 = "Bangladesh";
// var text2 = " is a beautiful country";
// document.write(text1.concat(text2));

// var text1 = "Bangladesh";
// var text2 = " is a beautiful country";
// var text = text1.concat(text2);
// document.write(text);

// var text1 = "Bangladesh";
// var text = text1.slice(0, 2);
// document.write(text);

// var text1 = "Bangladesh";
// var text = text1.slice(2, 5);
// document.write(text);

// var firstName = "Tarun";
// var lastName = " Mitra";
// var fullName = firstName + lastName;
// document.write(fullName.toUpperCase());



// Arithmetic and assignment operator

//operator hocce ganitik symbol
// Arithmetic operator  + , -, *, /, %(modulas), **(Exponent), ++, --
// Assignment Opertor =, -=, +=, *=, /=, %=, **= 

// var a = 6;
// console.log(a--);

// var a = 6;
// console.log(--a);

// var a = 6;
// console.log(a++);

// var a = 6;
// console.log(++a);

// var a = 10;
// var b = 10;
// var sum = a*b;
// console.log(sum);

// var a = 20;
// var b = 10;
// var modu = 20%10;
// console.log(modu);

// assignment operator

// var x = 3;
// x += 6; // x = x + 6  x = 3 + 6  x = 9
// console.log(x);

// var x = 4;
// x *= 4; // x = x + 4
// console.log(x);

// var x = 10;
// x /= 5; // x = x / 5
// console.log(x);


//Make your own calculator

/*
var num1 = 20 
var num2 = 10;
var sum,sub;

sum = num1 + num2;
document.write("Addition = " + sum + "<br>");

sub = num1 - num2;
document.write("Subtraction = " + sub);
*/

/* var num1 = prompt("Enter First Number: ");
   var num2 = prompt("Enter Second Number: ");

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

var sum, sub;

sum = num1 + num2;
document.write("Addition = " + sum + "<br>");

sub = num1 - num2;
document.write("Subtraction = " + sub);
*/

/*
var num1 = prompt("Enter first Number:")
var num2 = prompt("Enter your Second Number:")

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

sum = num1 + num2;
document.write("Addition = " + sum + "<br>" );

sum = num1 - num2;
document.write("Subtraction = " + sum + "<br>" );

sum = num1 * num2;
document.write("Multipulation = " + sum + "<br>" );

sum = num1 / num2;
document.write("Division = " + sum + "<br>" );

sum = num1 % num2;
document.write("vag shash = " + sum + "<br>" );
*/

/*
var num1 = prompt("Enter first Number:")
var num2 = prompt("Enter your Second Number:")

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

var sum, sub, mul, div, rem;

sum = num1 + num2;
document.write(num1 + " + " + num2 + " = " + sum + "<br>" );

sub = num1 - num2;
document.write(num1 + " - " + num2 + " = " + sub + "<br>" );

mul = num1 * num2;
document.write(num1 + " * " + num2 + " = " + mul + "<br>" );

div = num1 / num2;
document.write(num1 + " / " + num2 + " = " + div + "<br>" );

rem = num1 % num2;
document.write(num1 + " % " + num2 + " = " + rem + "<br>" );

*/

/*
var num1 = prompt("Enter first Number:")
var num2 = prompt("Enter your Second Number:")

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

var result;

result = num1 + num2;
document.write(num1 + " + " + num2 + " = " + result + "<br>" );

result = num1 - num2;
document.write(num1 + " - " + num2 + " = " + result + "<br>" );

result = num1 * num2;
document.write(num1 + " * " + num2 + " = " + result + "<br>" );

result = num1 / num2;
document.write(num1 + " / " + num2 + " = " + result + "<br>" );

result = num1 % num2;
document.write(num1 + " % " + num2 + " = " + result + "<br>" );

*/

/*
var base = prompt("Enter Base = ");
var height = prompt("Enter Height = ");
var area = base * height;
document.write("Area = " + area);
*/

/*
// parseFloat hoce doshomik and purnosonkha perfectly kaj korbe

var base = parseFloat(prompt("Enter Base = "));
var height = parseFloat(prompt("Enter Height = "));
var area = base * height;
document.write("Area = " + area);
*/

/*
// parseInt dile sodu purnosonkha kaj korbe kinto doshomik er jonne kaj korbe nah
var base = parseInt(prompt("Enter Base = "));
var height = parseInt(prompt("Enter Height = "));
var area = base * height;
document.write("Area = " + area);
*/


/*
var base = parseInt(prompt("Enter Base = "));
var height = parseInt(prompt("Enter Height = "));
var area = (base * height) / 2;
document.write("Area = " + area);
*/


/*
var base = parseInt(prompt("Enter Base = "));
var height = parseInt(prompt("Enter Height = "));
var area = (base * height) + 2;
document.write("Area = " + area);
*/

//Temperature Converter
// fahrenheit thake celsius e convert formul/sutro internet thake naya

/*
var farn = parseFloat(prompt("Enter Fahrenheit : "));
var cels = (farn-32) * (5/9);
document.write("Celsius = " + cels);
*/

// celsius thake fahrenheit convert

/*
var cels = parseFloat(prompt("Enter celsius : "));
var farn = (cels*(9/5)) + 32;
document.write("Farenheit = " + farn);
*/

// minute hours e convert
// formula janle sob kisu convert kora jai


/*
var mit = parseFloat(prompt("Enter minute : "));
var hours = (mit/60);
document.write("Hours = " + hours);
*/


// Relational operator ->, > , >=, <, <=, ==, ===, !=, !==
// Logical Operator ->, &&, ||, !
// Relational operator and logical Operator true and flase return kore mane boolien value return kore

/*
var num1 = 20;
var num2 = 25;
console.log(num1>num2);

var num1 = 20;
var num2 = 25;
console.log(num1>=num2);

console.log(20>=20);
console.log(20>20);
console.log(20<=20);
console.log(20==20);                 // == mane sodu value soman ace naki check korbe
console.log(20=="20");               // == mane sodu value soman ace naki check korbe
console.log(20===20);
console.log(20==="20");           // === value and data type 2 tai check korbe
console.log(10 != 6);            // ata sodu data type check korbe nah value check korbe
console.log(10 !== "10");        // ata sodu data type check korbe
console.log(25!=20);           // 25, 20 er soman noi ata sorto tai true
*/


/*
// logical operator
// && (logical and) (bangla abong)

var num1 = 50;
var num2 = 30;
var num3 = 20;
console.log(num1>num2 && num1>num3);          // uvoi diker condition sorto hole true return korbe

console.log(num1>num2 && num3>num2);          // uvoi diker condition sorto noi tai false
                                             //  || or er kaj 
console.log(num1>num2 || num3>num2);         //uvoi diker jekono akta sorto hole true return korbe

console.log(num3>num1 || num3>num2);          // uvoi diker condition mitha hole false return korbe

// not operator ! true ke false korbe false ke true korbe

console.log(!(25>22)); // true ke false kora hoyace
console.log(!(25<10)); // mitha ke true kora hoyace 
*/


//control statement 
// control statement 2 prokar
// 1. Conditional control statement: if, else if, else , switch
// 2. Loop control statement:  for , while, do while


// Conditional control statement: 

// Even and odd
/*
var num = 5;
if (num % 2 == 0)
console.log("Even");

if(num % 2 != 0)
console.log("Odd");
*/

/*
var num = 6;
if (num % 2 == 0)
console.log("Even");

if(num % 2 != 0)
console.log("Odd");
*/
/*
var num = 5;
if (num % 2 == 0)
console.log("Even");

else
console.log("Odd");
*/

// Grade point bar kora
/*
var num = prompt("Enter subject marks: ");
if(num >= 80)
   console.log("A+");
else if (num >= 70)
   console.log("A");
else if (num >= 60)
   console.log("A-");
else if (num >= 50)
   console.log("B");
else if (num >= 40)
   console.log("C");
else if (num >= 33)
   console.log("D");
else (num >= 0)
   console.log ("F");
*/

//logical operators

/*
var marks = prompt("Enter your marks : ");

if(marks > 100 || marks < 0)
   console.log("Invalid marks");
else if (marks >= 80 && marks <= 100)
   console.log("A+");
else if (marks >= 70 && marks <= 79)
   console.log("A");
else if (marks >= 60 && marks <= 69)
   console.log("A-");
else if (marks >= 50 && marks <= 59)
   console.log("B");
else if (marks >= 40 && marks <= 49)
   console.log("C");
else if (marks >= 33 && marks <= 39)
   console.log("D");
else
   console.log("Fail");
*/

/*
// kon number ta boro ta dakha

var num1 = prompt("Enter num1 : ");
var num2 = prompt("Enter num2 : ");
var num3 = prompt("Enter num3 : ");

if (num1 > num2 && num1 > num3)
   console.log("Large number = " + num1);
else if (num2 > num1 && num2 > num3)
   console.log("Large number = " + num2);
else
   console.log("Large number = " + num3);
*/

// Vowel / consonant bar korar niom
/*
var letter = prompt("Enter a letter : ");
if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
   console.log("Vowel");
else if (letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U")
   console.log("Vowel");
else
   console.log("Consonant");
*/

// opore code vowel golo choto hat er jodi boro hat er type 
// kori tahole else consonant dakhabe  ei 
// jonne amra input ja e daina knu ota choto hat e convert 
// hoya vowel check korbe

/*
var letter = prompt("Enter a letter : ");
letter = letter.toLowerCase();
if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
   console.log("Vowel");
else
   console.log("Consonant");
*/


/*
var digit = prompt('Enter any digit : ');
if (digit == 0)
   console.log("Zero");
else if (digit == 1)
   console.log("One");
else if (digit == 2)
   console.log("Two");
else if (digit == 3)
   console.log("Three");
else if (digit == 4)
   console.log("Four");
else if (digit == 5)
   console.log("Five");
else if (digit == 6)
   console.log("Six");
else if (digit == 7)
   console.log("Seven");
else if (digit == 8)
   console.log("Eight");
else if (digit == 9)
   console.log("Nine");
else if (digit == 10)
   console.log("Ten");
else 
   console.log("Not a digit");
*/

// akoi kaj switch er mardhome korbo
// digit spelling
// Ex: 0 - Zero, 1 - One, .... 9 - Nine, 10 -Not a valid digit
// switch er 4ti keyword ace: switch, case, break, default
/*
var digit = prompt("Enter any digit : ");

switch (digit) {
   case "0":                           // case dile miloto contion bujano hoi case 0 hole print One korbe 
      console.log("Zero");
      break;                           // break nah dile pore line print hoya jabe tai break
   case "1":
      console.log("One");
      break;
   case "2":
      console.log("Two");
      break;
   case "3":
      console.log("Three");
      break;
   case "4":
      console.log("Four");
      break;
   case "5":
      console.log("Five");
      break;
   case "6":
      console.log("Six");
      break;
   case "7":
      console.log("Seven");
      break;
   case "8":
      console.log("Eight");
      break;
   case "9":
      console.log("Nine");
      break;
   case "10":
      console.log("Ten")
      break;
   default:
      console.log("Not a digit"); // default holo kono condition nah hole default print korbe else mto kaj kore
   
}
*/

// Task 5 : input a letter and check it is vowel or consonant using switch
/*
var letter = prompt("Enter a letter: ");
letter = letter.toLowerCase();

switch (letter) {
   case "a":
      console.log("Vowel");
      break;
   case "e":
      console.log("Vowel");
      break;
   case "i":
      console.log("Vowel");
      break;
   case "o":
      console.log("Vowel");
      break;
   case "u":
      console.log("Vowel");
      break;
   default:
      console.log("Consonent");


}
*/
/*
var letter = prompt("Enter any letter : ");
letter = letter.toLowerCase();

switch (letter) {
      case "a":               // mutiline case or multipul case code ta short hoya galo
      case "e":
      case "i":
      case "o":
      case "u":  
   console.log("Vowel");
      break;
   default:
      console.log("Consonant");
}

*/

// Control statement : 
// Loop Control st: for, while, do while
// stacture
/*
for(starting; condition; update )
{
   cocument.write("<h1>Bangladesh</h1>");
}
*/

/*
for (var x = 1; x <= 100; x= x+1) {
   document.write(x);
}
*/
/*
for (var x = 10; x <= 100; x= x+2) {
   document.write(x);
}
*/
/*
for (var x = 1; x <= 10; x= x+1) {
   document.write("Bangladesh ");
}
*/

// 1 3 5 7 .... 99 bijor sonkha nirnoi
// akhane  1 thake 99 projontu sonkha ace and 2 kore gap tai x = x + 2

/*
for (var x = 1; x <= 99; x = x + 2) {
   document.write( " " + x);
}
*/

// 2 4 5 8 .....100 projon tu jur sonkha nirnoi
/*
for (var x = 2; x <= 100; x = x + 2) {
   document.write( " " + x);
}
*/
// 10 9 8 7 6 5 4 3 2 1 
// boro thake choto hbe

/*
for (var x = 10; x >= 1; x = x - 1) {
   document.write(" " + x);
}
*/

// 1+2+3+4+5 = 15  1 thake 5 sonkhar jokful
/*
var sum = 0;
for (var x = 1; x <= 5; x = x + 1) {
   sum = sum + x; // sum = 0 + 1 = 1
}
document.write(sum);
*/

// 10 bar bangladesh print hbe
/*
for (var x = 1; x <= 10; x++){
   document.write("<h1> Bangladesh </h1>");
}
document.write("<h1>End</h1>");
*/
/*
for (var x = 1; x <= 10; x=x+1){
   document.write("<h1>Tarun mitra</h1>");
}
document.write("<h1>End</h1>");
*/
/*
for (var x = 1; x <= 10; x = x + 1){
   document.write(" " + x);
}
*/

// 1+2+3+4+5 = 15  1 thake 5 jukful
// sum = 0
// x = 1
// sum = 0 + 1 = 1
// sum = 1 + 2 = 3
// sum = 3 + 

/*
var sum = 0;
for (var x = 1; x <= 5; x = x + 1){
   sum = sum + x; // sum = 1
}
document.write(sum);
*/
/*
var sum = 2;
for (var x = 1; x <= 5; x = x+1){
   sum = sum + x;
}
document.write(sum);
*/
/*
var sum = 3;
for (var x = 1; x <= 5; x = x+1){
   sum = sum + x;
}
document.write(sum);
*/
/*
var sum = 0;
for (var x = 1; x <= 5; x = x + 1){
   sum = sum + x;
}
document.write(sum);
*/
/*
// kivabe hoyace nicha tar example kora hoyace
sum = 0
x = x + 1                           // protibar x er man 1 kore barbe
x = 0 + 1 = 1
x = 1 + 1 = 2
x = 2 + 1 = 3
x = 3 + 1 = 4
x = 4 + 1 = 5                    // condition x <= 5 tai 5 projontu barce

sum = 0;
for (var x = 1; x <= 5; x = x + 1){
   sum = sum + x;
       = 0  + 1 = 1
       =1 + 2 = 3
       =3 + 3 = 6
       =6 + 4 = 10
       =10 + 5 = 15            // output 15 hbe result
}
*/

// 5+6+7+8+9+10  5 thake 10 projontu sonkha jukful
/*
var sum = 0
for (var x = 5; x <= 10; x = x + 1){
   sum=sum+x;
}
document.write(sum);
*/
// input diya jukfull nirnoi
// parseInt or parsefloat diya nite hbe karon user je 
// sonkhata dibe ta string type thkbe convert kore intijar hbe
/*
var m = parseInt(prompt("Enter the starting number : "));
var n = parseInt(prompt("Enter the last number : "));

sum = 0;
for(x = m; x <= n; x = x + 1){
   sum = sum + x;
}

document.write(sum);
*/


/*
// ei programta sodu akbar cholbe mane akbar juk kore input 
// box off hoya jabe abr refresh kore calculation korte hbe 
// kinto amra jodi amn chai condition diya programti 5 bar 10 bar
//  joto icha cholbe tahole amra sei kaj ta for loop er mardhome 
//  korte pari

var num1 = parseInt(prompt("Enter first number : "));
var num2 = parseInt(prompt("Enter second number : "));
var sum = num1 + num2;
document.write("Result = "  + sum);
*/

/*
// for loop er mardhome condition x <= 5 diya 5 bar juk kore dakhano holo
 for(var x = 1; x <= 5; x++) {
    var num1 = parseInt(prompt("Enter first number : "));
    var num2 = parseInt(prompt("Enter second number : "));
    var sum = num1 + num2;
    console.log("Result = " + sum);
 }
*/
/*
 //for loop 

 for (var i = 1; i <= 100; i = i + 1) {
    document.write(" " + i);
 }
*/
 // opore akoi kaj kivabe while loop er mardhome korbo 
// protita loop er e 3ta  kore ongsho thake Ex:stating/inicialisation, condition ,update vinno vinno way te 
// for loop e condition er 3 ta part e ak satha thake kinto while loop e 3 ta part ak satha thake nah.
// while loop er stating point ta prothom e thakbe abong condition part ta while loop er 2condition e thkbe
// abong update part body onsha thkbe
/*
var i = 1;

while (i <= 100) {
   document.write(" " + i);
   i = i + 1;
}

document.write("<h1>End</h1>");              // jpkhon e loop er kaj sash tokhon e end print korbe bujar jonne daya holo
*/

// 1 thake 10 projontu sonkha jukful
// 1 + 2 + 3 + ........ + 10

/*
var i = 1;                           // jehato 1 thake jukful soru hbe tai akhane 1 dilam 5 thake soru hole 5 hoto
var sum = 0;

while(i <= 10) {                  // jehato 10 projontu cholbe tai condition 10
   sum = sum + i
   i = i + 1;                    // bebodan ak ak kore tai akhane 1 thkbe mane 1 + 2 + 3 + 4  ak ak kore bebodan sonkhar vitor abr 2 kore bebodhan hole amn holo 1+4+7+10

}
document.write(sum);
*/

/*

// 10 thake 20 projontu sonkhar jukful

var i = 10;                         //  10 thake soru tai 10
var sum = 0                      // jehato sum kisu nai apatotu tai zero

while(i <= 20) {              // 20 projontu sonkhar jukful tai 20
   sum = sum + i              // sum = 0 + 10 = 10 // sum = 10 + 
   i = i + 1;
}

document.write(sum);
document.write("<h1>End</h1>");

*/


/*

// 1 thake 100 projontu jhor sonkhar jukfull
// 2 + 4 + 6 + 8 + ....... + 100

var i = 2;                     // prosno e soru 2 thake jhor tai 2
var sum = 0;

while (i <= 100) {          // 100 projontu program ti cholbe
   sum = sum + i;
   i = i + 2               // babodhan 2 kore tai 2 Ex: 2 + 4 + 6 + 8 + ........ + 100
}

document.write(sum);

*/


/*

// task-6: 1 thake 100 projontu je sonkhar golo 3 abong 5 thara
// vag jai abong vagsash zero thake oi sonkha golor jukful bar korte hbe
// sob sonkha juk korbe nah je sunkha golo 3 abong 5 dhara vag jai oi goloi juk korbe ei jonne condition set kore dite hbe

var i = 1;                          // jehato 1 thake cholbe tai 1
var sum = 0;

while (i <= 100) {                   // 100 projontu cholbe tai 100
   
   if(i % 3 == 0 && i % 5 == 0) { // condition je sonkha golo 3 abong 5 dhara vag jabe abong vag sash zero hbe oi sonkha goloi jukful hbe
      sum = sum + i;   
   }
  
   i = i + 1;                    // 1 kore babodhan tai 1
}

document.write(sum);

*/



/*

// kon sonkha golor jukful kora hoyace ta dakte hole
// documnet.write(" " + i); if condition er vitor dite hbe

var i = 1;                              // jehato 1 thake cholbe tai 1
var sum = 0;

while (i <= 100) {                   // 100 projontu cholbe tai 100
   
   if(i % 3 == 0 && i % 5 == 0) { 
      document.write(" " + i);    // document.write dayar mane holo kon sonkha golo juk korbe ta dakha
      sum = sum + i;   
   }
  
   i = i + 1; // 1 kore babodhan tai 1
}

document.write(" Result = " + sum);

*/


// (while loop) and (do while loop) er change kothay ta nicha dakhano holo
// 1 thake 10 projontu sonkha while and do while diya korano hoyace


/*
// while loop 
var i = 1;
while (i <= 10){
   document.write(" " + i);
   i++;
}
*/

/*
// do while loop
var i = 1;                     //prothom e thake starting/initialisation mane holo-(sochona) 
do {                          //do vitor thkbe je kaj ti bar bar korte chai ota
   document.write(" "+ i);
   i++                      // update part ta do er body vitor hbe
} while(i <= 10);           //while vitor thkbe condition
*/





// break and continue

// break ar kaj hoce vanga daya shata switch er vitor e thak 
// bha conditon er vitor e thak tar kaj hocce vanga daya 
// condition er opor vipti kore sha swith kinba loop ke vanga dite pare
// break and continue kivabe loop er vitor use kora jai ta dakbo

/*
for(var i = 1; i <= 100; i++) {
      document.write(" " + i);
}
*/

// ei loop er vitor break keyword er use dakbo kivabe kore
// break and continue keyword condition er opor vipti kore kaj kore
// ei jonne amra for loop er vitor if nibo
/*
for(var i = 1; i <= 100; i++) {
   if (i == 10) {               // i == 10 hole break nibe 10 == 10 hole break nibe 10 print hbe nah
      break;      
   }
   document.write(" " + i);
}

document.write(" end");       // loop er bahire ja kisu thakok nah kanu loop break nibar por ta kaj korbe

*/

/*
for(var i = 1; i <= 100; i++) {
   
   document.write(" " + i);     // document.write erpor if condition dile 10 print kore condition check korbe
                               // kinto document.write er age if  condition dile 10 == 10 mile gale break nibe 10 print hbe nah

   if (i == 10) {               // i == 10 hole break nibe 10 == 10 hole break nibe 10 print hbe nah
      break;      
   }
}

document.write(" end");       // loop er bahire ja kisu thakok nah kanu loop break nibar por ta kaj korbe
*/

/*
// abr continue ar kaj dakbo

for (var i = 1; i <= 100; i++) {
   if(i == 10) {                 // condition check kore continue kore upore pathiya diba kinto 10 print hbe nah
      continue;                  // 1 thake 100 sob hbe kinto 10 badha
   }

   document.write(" " + i);
}
*/

/*
for (var i = 1; i <= 100; i++) {
   if (i % 2 == 0) {             // je sob sonkha golo 2 dhara vag kore vagsash zero hbe sei sonkha golo print hbe nah abong print nah kore continue korbe abong bijor sonkha bariya jabe
      continue;
   }
   document.write(" "+ i);
}

*/

/*
for (var i = 1; i <= 100; i++) {
   if (i % 2 != 0) {             // je sob sonkha golor 2 dhara vag kore vagsash zero hbe nah sei sonkha golo print hbe nah abong print nah kore continue korbe abong jor sonkha bariya jabe
      continue;                  // mane conditon ja thkbe sei sorte sonkha golo print hbe na print nah kore continue korbe abong baki sonkha golo print hbe
   }                             // vijor sonkha golo condition er satha match hoya continue hoya jace
   document.write(" "+ i);
}
*/



// Ternary Operator
// Conditional control statement-if, else if, else je kaj golo kora hoyace
// ta ternary operator diya sohoj e kora jai ta akhon dakbo

// if,else diya sonkha positive and negative check korbo
// and ak e kaj ternary operator diyao korbo

/*

var number = Number(prompt("Enter a number: "));
if(number>0){
   console.log("Positive");
}
else{
   console.log("Negative");
}
*/


/*

// abong ei akoi kaj ternary operator diya korbo

var number = Number(prompt("Enter a number: "));

var result = number > 0 ? "positive" : "Negative"    // Ex: condition ? true : false // akhane true and false er jagai ja khusi tai likha daya jai
console.log(result);                                // condition sorti hole positive mitha hole negative

*/


/*
// avabayo ak e kaj kora jai 

var number = Number(prompt("Enter a number: "));
number > 0 ? console.log("Positive") : console.log("Negative");
*/

// amra 2ti condition diya ternary oparator daklam abr kivabe -
// 3 ta bha ak e odik condition diya ternary oparator likha jai ta
// dakbo er age if else er kaj dakha asi

/*
var number = Number(prompt("Enter a number: "));
if(number>0){
   console.log("Positive");
}else if(number<0){
   console.log("Negative");
}else{
   console.log("Zero");
}
*/

/*
// 3ta condition diya ternary 

var number = Number(prompt("Enter a number: "));
var result = number>0 ? "positive" : number<0 ? "Negative" : "Zero";
console.log(result);

*/



/*

// class-24 function
// sonkha square bar korbo funtion chara

var num = 5;
var result = num * num;
document.write("Result = " + result + "<br>");

var num = 6;
var result = num * num;
document.write("Result = " + result + "<br>");

var num = 7;
var result = num * num;
document.write("Result = " + result + "<br>");
*/

// opore ak e kaj bar bar nah kore amra funtion er mardhome korte pari
// creating a function
// function e je kono nam daya jabe


/*
function anyname() {
   var num = 5;
   var result = num * num;
   document.write("Result = " + result + "<br>");   
}

//calling a function
anyname();
anyname();
anyname();        // joto bar call korbo totu bar asbe
*/

/*

// amra paramitar e funtion dakbo kivabe value change kora jai

function anyname(num) {                         // akhane akta num paramitar diya dilam value nibar jonne
      var result = num * num;
      document.write("Result = " + result + "<br>");
}
// calling a funtion
anyname(5);                                 // akhane ei value golo ak ak kore num paramitar er vitor add hbe
anyname(6);
anyname(7);

*/

// kivabe double paramitar nibo ta dakbo 
// abong double value nibo paramitar e

/*

function anyname(num1,num2) {                 // 2 ti paramitar naya holo num1 num2
      var result = num1 * num2;
      document.write("Result = " + result + "<br>");
}

anyname(5,6);                    // 2ti paramitar tai 2ti value daya hoyace
// 5 jabe num1 er vitor abong 6 jabe num2 vitor


*/

/*

// akti function thake kivabe value return korte hoi

function anyname(num1, num2) {            // akhane value 5 abong 6 chole jace num1,num2 er vitor

   var result = num1 * num2;              // num1*num2 ghon kore result er vitor ghonful jace

   return result;                        // abong result return korce document write er vitor abong output show hoce
}

document.write(anyname(5, 6));
*/

/*

// opore kaj ta avabayo kora jai
// prothom e var x number line e jabe abong value niya num1 and num2
// vitor value jabe abong num1*num2 ghon hoya result er vitor thkbe
// abong result return kore value var x er vitor pathabe abong document.write e x ke call dile print hbe result

function anyname(num1, num2) {
   var result = num1 * num2;
   return result;
}

var x = anyname(5, 6);
document.write(x);

*/

/*

// add function // juk korbo

function addition(x, y) {
   var result = x + y;
   document.write("Sum = " + result + "<br>");
}

addition(10, 20);


// sub function // biyok korbo

function subtraction(x, y) {
   var result = x - y;
   document.write("Sub = " + result + "<br>");
}

subtraction(40,30);

*/

/*

// add function // juk korbo

function addition(x, y) {
   var result = x + y;
   document.write("Sum = " + result + "<br>");
}

// sub function // biyok korbo

function subtraction(x, y) {
   var result = x - y;
   document.write("Sub = " + result + "<br>");
}

addition(20, 30);                             //joto bar icha call daya jabe
addition(30,50);                             // serial onujai e call hbe abong serial onujai e output hbe
subtraction(40,30);
subtraction(100,80);


*/

// funtion summary ki ki shiklam

// creating a function
// calling a function
// how to pass value in a function
// how to returning a value




// Class-25: Array - is an object; collection of variables ke array bola hoi 

// onk golo variable mile je jinis ta gothitho hoi take array bola hoi

// Example: 100 jon students er nam store kore rakhte hbe tar jonne ja korte hbe
// amra 5 ti valiable nilam


/*
var name1, name2, name3, name4, name5;          // 100 jon nile avabe alada alada 100 nam dite hbe kinto array sahaje 

name1 = "Anis";                               // 100,200 joto value naya somvob
name2 = "Lima";
name3 = "Shipa";
name4 = "Rinku";
name5 = "Tikku";
console.log(name1);                             // akta value print hbe
*/



/*
var names = new Array(5);                  //akhane value er man nah dilayo hbe           // akhane joto value dibo tuto golo variable toiri hbe apatotu amra 5 nilam value nah dilayo problem nai auto variable count hbe
names[0] = "Anis";                           // index 0 thake soru hbe mane count hbe
names[1] = "Lima";
names[2] = "Shipa";
names[3] = "Rinku";
names[4] = "Tikku";                            // jahato zero thake count soru hoyace 4 mane 5 hbe
//  console.log(names[2]);                       // je variable er value print korbo names er por tar index number diya dite hbe
// console.log(names[4]);                       // 4 index value print hbe
// console.log(names[5]);                       // 5 er value print hbe nah karon 5 index nei tai undefined

console.log(names);                             // names dile aksatha sob value print hbe
// console.log(names.length);                      // length er mardhome koita value ace ta dakha jai
*/





/*
// amra aro sohoj vabe array use korte pari ja always babohar hoi

var names = ["Anisul", "Lima", "Shipa", "Rinku", "Tikku"];     // string use korle double quotation number use korte quotation dite hbe nah
console.log(names);
// console.log(names[4]);                                         // indivisual vabe index er mardhome call kora jabe value 
// console.log(names.length);                                 // koto length ata dakhabe
*/


/*

// array kisu library funtion
// push funtion   //push funtion er mardhome array vitor extra value add kora jai

var names = ["Anisul", "Lima", "Shipa", "Rinku", "Tikku"];    // akhane 5 ti value ace kinto push  er mardhome extra value add korbo
// console.log(names.length);
names.push("Sokina");                                    // 6 number index e add hbe Tikku por er value hishabe
console.log(names);
// console.log(names[5]);                                   // 5 index er value dakhabe sokina 0 index hole sokina 5 index hbe
//console.log(names.length);                                  // push kora por value 6 hoya gace

*/


/*

var names = ["Tarun", "mitra", "sokina", "Anis", "Rinku"];
names.push("Tonnmoy");
names.push("lima");
names.push("Tinku");
console.log(names);
*/


/*

// push er mardhome amra value add korte pari
// pop er mardhome amra value remove korte pari
// pop sobar sash er element ke remove kore dibe



var names = ["Tarun", "mitra", "sokina", "Anis", "Rinku"];
names.push("Tonnmoy");
names.push("lima");
names.push("Tinku");
names.pop();            // joto bar dibo totu bar remove hbe
names.pop();            // last element ta remove hoya gace
console.log(names);

*/


/*

// concat library mardhome 2 ta variable ke juktu korbo

var country1 = ["Bangladesh", "India"];
var country2 = ["Pakistan", "Nepal"];

var country = country1.concat(country2);        // country1 er satha country2 concat kora hoyace
console.log(country);

*/




//class-26  loop in array
//array vitor kivabe loop babohar kora jai ta dakhbo

/*
var num = [10, 20, 30, 40, 50];
// console.log(num);
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
*/


/*
// avabe nah kore ata loop er mardhome korbo

var num = [10, 20, 30, 40, 50];

for (var i = 0; i < 5; i++) {
   console.log(num[i]);
}
*/


/*

// jukh korbo

var num = [10, 20, 30, 40, 50];
var sum = 0;

for(var i = 0; i < 5; i++) {
   sum = sum + num[i];                    //num[i] index er man 10 thake 50 projontu jabe mane index 0 thake 4 projontu hbe
}
console.log("sum = " + sum);

*/

/*

// amra avabe array value nah niya user er kaj thake input nibo 

var num = new Array();           // array value khali rakhaci

for(var i = 0; i < 5; i++) {    // i = 0 niyaci karon array index zero thake soru hoi
                               // i < 5 mane 5 ti value array vitor rakhbo ei value je kono sonkha hote pare
                               // i++ ak ak kore 5 ti value projontu jabe
   num[i] = parseInt(prompt("Enter a number : "));  // akhanr num[1],num[2]  avabe input jekono value hote pare   
}

var  sum = 0;

for (var i = 0; i < 5; i++) {
   console.log(num[i]);               // atar mane holo input koto sonkha nichi ta show korbe Ex: 10 nilam 20 nilam tai show kore dakhabe
   sum = sum + num[i];              // akhane sum 0 ar num[i] user input thake value naya ata calcution korle jukful bariya jabe
}

console.log("sum = " + sum);
*/



/*






// class-27 anisul islam
//  Array methods
//  you have already learned about pop(),push().concat()


// akhon amra shikbo shift()  
// pop() er oposit hoce shift()              // pop() last er value remove kore r shift() prothom er value remove kore

var names = ["Anis","Rabeya","kolpona"];
console.log(names);                       // prothom e 3 ta element cilo
names.shift();
console.log(names);                       // names.shift() er por 2ta element ace mane akta element remove hoya gace



// abr amra dakbo unshift() 
// unshift() hoce push() er thik oposit push() last e element add kore r unshift() prothom e element add kore

names.unshift("sagor");
console.log(names);

*/

/*
var names = ["Tarun","Raju","Rubel","Seyam"];
names.unshift("Rabeya");
console.log(names);
*/

/*
var names = ["Tarun","Raju","Rubel","Seyem"];
names.shift();
console.log(names);
*/


// abr amra dakbo splice methods 
// splice methods er mardhome elements add kora jai abr remove o kora jai
// splice(position,remove,add) Ex:splice(2,0,"tarun","Rahim");
// prothom kto number position thake value add hbe tai dite hbe
// 2nd e element remove hbe kina r element remove hole sbr last er element remove hbe
// 3rd value dite hbe names, akhane mutipul names add kora jai abr single name o add kora jai


/*
var names = ["Tarun","Mitra","Raju","Mina"];
names.splice(2,0,"karim","Rahim");            // 2 mane 2number value thake add hbe element // zero mane element remove hbe nah
console.log(names);
*/

/*
var names = ["Tarun","Rahim","kolpona","Srabone"];
names.splice(0,1,"korim","Anis");       // zero mane prothom element thake add hoyace // 1 mane akti element remove hoyace
console.log(names);
*/

/*
// remove element

var names = ["Tarun","Korim","Srabone","Raju"];
names.splice(1,2)                // 1 thake 2 er mordha joto value ace remove hbe
console.log(names);              //korim and srabone remove index niom onujaie

*/

/*
var names = ["Tarun","Srabone","Kolpona","Nayem"];
var newArray = names.slice(1);   // akta element remove
console.log(newArray);           // abong newArray ke call korlam
*/

/*
// sort() methods
// sort() methods er mardhome element golo alphabate er mardhome sajabe A-Z er mto kbe kon letter age ei calculation kore sajabe

var names = ["Tarun","Mitra","Anis","Babu","conpona"]   // akhne element er alphabate serial nei kinto sort() ata sajiya nibe
var sortNames = names.sort();
// names.reverse();            // z to a vabe nibe ulta
console.log(sortNames);
*/


/*
// abr reverse() methods er marthome z to a ulto vabe sajano jai
// sort() methods diya pore reverse() dile z to a serial maintain thik thake
// sort() nah diya reverse dile serial ta tmn thik thake nah
// nicha example e sort () and reverse 2tai use kora hoyace

var names = ["Tarun","Anis","korim","ziju","xlim"];
var sortnames =names.sort();  
names.reverse();
console.log(names);

*/

// number sort() er jonne 
// boro thake choto
// choto thake boro 
// 2 tai ei sort() methods er mardhome kora jabe

/*
// avbe jodi kori capital er rules diya tahole hbe nah
var numbers = [20, 5, 25, 45, 1];
numbers.sort();
console.log(numbers);
*/

/*
//  choto thake boro
var numbers = [20, 5, 25, 45, 1];
numbers.sort(function(a,b){
   return a-b;                   // akhane sorting ta calculation er mardhome hoi
});                              // caculation er mardhome positive and negitive er vabe boro choto nirnoi hoi
console.log(numbers);            // anisul 27 number class
*/

/*
// boro thake choto
var numbers = [20,5,25,45,1];
numbers.sort(function(a,b){
   return b-a;               // sodu akhane change b age a pore
});
console.log(numbers);
*/



// class-28 // Object
// How to create an object
// How to print the value of an object
// adding a constructor
// adding function inside a constructor

//student details

/*
var name = "Anisul Islam";
var age = 27;
var cgpa = 3.92;
var lang = ["Bangla", "hindi", "English"];

console.log(age);
*/


// avabe amra na kore object er mardhome sob data akti valiable e nite parbo


/*
var student1 = {
   name: "Anisul Islam",
   age: 27,
   cgpa: 3.92,
   lang: ["Bangla", "Hindi", "English"]
}

console.log(student1);
*/


/*
var student1 = {
   name: "Anisul Islam",
   age: 27,
   cgpa: 3.92,
   lang: ["Bangla", "Hindi", "English"]
}

console.log(student1.name);
*/


// abar amra 3-jon students er details store kore rakhbo
// adding a constructor

/*
function Student(name, age, cgpa, lang) {   //paramitar
   this.name = name;
   this.age = age;
   this.cgpa = cgpa;
   this.lang = lang;
}

var student1 = new Student("Anisul Islam", 27, 3.92, ["benglali", "hindi", "English"]);
var student2 = new Student("Tarun mitra", 20, 3.92, ["benglali", "hindi", "English"]);
var student3 = new Student("Sumon biswas", 23, 3.92, ["benglali", "hindi", "English"]);
var student4 = new Student("Suzan biswas", 29, 3.92, ["benglali", "hindi", "English"]);

console.log(student1,student2,student3,student4);
*/

/*
function Student(name, age, cgpa, lang) {
   this.name = name;
   this.age = age;
   this.cgpa = cgpa;
   this.lang = lang;
}

var student1 = new Student("Anisul Islam", 27, 3.92, ["benglali", "hindi", "English"]);
var student2 = new Student("Tarun mitra", 20, 3.92, ["benglali", "hindi", "English"]);
var student3 = new Student("Sumon biswas", 23, 3.92, ["benglali", "hindi", "English"]);
var student4 = new Student("Suzan biswas", 29, 3.92, ["benglali", "hindi", "English"]);

console.log(student1.name);
console.log(student1.age);
console.log(student1.cgpa);
console.log(student1.lang);
*/


//  adding function inside a constructor
/*
function Student(name, age, cgpa, lang) {
   this.name = name;
   this.age = age;
   this.cgpa = cgpa;
   this.lang = lang;

   this.display = function () {    // this.anyname daya jai 
      console.log(this.name);
      console.log(this.age);
      console.log(this.cgpa);
      console.log(this.lang);
    }
}

var student1 = new Student("Anisul Islam", 27, 3.00, ["bangla", "English"]);
var student2 = new Student("Tarun mitra", 27, 3.00, ["bangla", "English"]);
var student3 = new Student("Rofiq Islam", 27, 3.00, ["bangla", "English"]);
var student4 = new Student("Luna Islam", 27, 3.00, ["bangla", "English"]);

student1.display();
student2.display();
student3.display();
student4.display();

*/


// class-29  // Math Object

/*
// maximum number

var num1 = parseInt(prompt("Enter first number : "));
var num2 = parseInt(prompt("Enter second number: "));

var maximum = Math.max (num1,num2);
console.log(maximum);
*/


/*
// random  0 thake 1 er vitor sonkha randomly nibe kinto 1 ke inqlud kore nah

console.log(Math.random());

// base value ta rakha baki value fale dai
// akhane 5 rakha .444 fale dice

console.log(Math.floor(5.444));

// math.round ata dosomik er por value 5 er boro thakle mul sonkha er satha 1 juk hbe

console.log(Math.round(5.666));

//Math.ceil hoce dosomik sonkha ja value thakbe tar thake 1 boro hbe

 console.log(Math.ceil(5.444));

 // absolate number dakhabe

 console.log(Math.abs(4.6));
 console.log(Math.abs(-4));

 //Generate a random number (0-10)
 // highest je vlue lagbe tar thake ak bashi * korete hbe
 // akhane 10 lagbe tai 1 bashi dice

 console.log(Math.floor(Math.random() * 11));

 console.log(Math.ceil(Math.random() * 11))

 */


 // class-30 // Guessing Game

 // Guessing a number from 1 to 5
 // Generate a random number between 1 to 5
 // If the guess number matches random number; then show message won else lost
 // Run the game for 5 times
 // show the number of wons and losts
 // total complete code holo step-3 bujanor jonne avabe korlam

 /*
 // step-1

 var guessNumber = parseInt(prompt("Enter a number from 1 to 5 : "));

 var randomNumber = Math.floor(Math.random() * 5) + 1;   // 1 thake 5 projontu random number nibe

 if (guessNumber == randomNumber) {
   console.log("You have won");
 }else {
    console.log("You have lost. Random number was " + randomNumber);
 }
*/

/*
 // step-2
 // akhon poro kaj ta 5 bar cholbe tai total code ta loop er vitor niya nilam

 for (var i = 1; i <= 5; i++) {

   var guessNumber = parseInt(prompt("Enter a number from 1 to 5 : "));

   var randomNumber = Math.floor(Math.random() * 5) + 1;   // 1 thake 5 projontu random number nibe
  
   if (guessNumber == randomNumber) {
     console.log("You have won");
   }else {
      console.log("You have lost. Random number was " + randomNumber);
   }
}
*/



/*
// step-3
// akhon koto bar won and lost tai show korbe

var numOfWon = 0;
var numOfLost = 0;

for (var i = 1; i <= 5; i++) {

   var guessNumber = parseInt(prompt("Enter a number from 1 to 5 : "));

   var randomNumber = Math.floor(Math.random() * 5) + 1;   // 1 thake 5 projontu random number nibe
  
   if (guessNumber == randomNumber) {
     console.log("You have won");
     numOfWon++  // won hole ak ak kore barbe
   }else {
      console.log("You have lost. Random number was " + randomNumber);
      numOfLost++ // lost hole ak ak kore barbe
   }
}

document.write("Total Number of won = " + numOfWon + "<br>");
document.write("Total Number of Lost = " + numOfLost + "<br>");

*/


// class: 31 // Date Object and its methods
// akhane date thake year methods access hoyace
// abr var tarun dile tarun thake access hbe
// akhene valiable anyname set kora jabe

/*
var tarun = new Date();
// console.log(date);
document.write(tarun);

var year = tarun.getFullYear();
console.log(tarun);
*/

/*
// year dakhbe

var date = new Date();
// console.log(date);
document.write(date);

var year = date.getFullYear();
document.write(year);
*/

/*
var date = new Date();
// console.log(date);
document.write(date);
*/


/*
// abr date thake month access hoce
// month 0 thake 11 projontu 0 january thake soru 11 ke decembar month ke bujai


var date = new Date();
console.log(date);
// document.write(date);

var year = date.getFullYear();
console.log(year);

var month = date.getMonth();
console.log(month);      // january hole month 0

var currentDate = date.getDate();
console.log(currentDate);

var currentDay = date.getDay();
console.log(currentDay);   // sunday 0 thake soru 6 projontu

var currentHour = date.getHours();
console.log(currentHour);

var currentMinutes = date.getMinutes();
console.log(currentMinutes);


var currentSeconds = date.getSeconds();
console.log(currentSeconds);


var currentmillisecondes = date.getUTCMilliseconds();
console.log(currentmillisecondes);
*/



         //var name = "Tarun mitra";
        // var age = 24;

        // var name;
        // var age;

        /* var name,age,country;

        name = "sufia";
        country = "Bangladesh";
        age = 25;

          document.write(name);
          document.write(country);
          document.write(age);
          
        */




// CLASS: 32 // How to select HTML Element
// Introduction to DOM (Document object model)
// atodin ja shiklam ta abar babohar korbo
// ei code er satha index file o royace

/*
// getElementById

// document.getElementById("heading").innerHTML = "Hello";

// amra ak e kaj avabayo korte pari

var heading = document.getElementById("heading");
heading.innerHTML = "Hello";

document.getElementById("para").innerHTML = "Bye";

document.getElementById("heading1").innerHTML = "Good Bye! Good Bye";

*/

/*
//getElementsByTagName
// akhane index[0][1] mane holo h2 2ta same tag prothom ta [0]index porer ta[1]

document.getElementsByTagName("h2")[0].innerHTML = "Mitra tarun";
document.getElementsByTagName("h2")[1].innerHTML = "Small name";

*/

/*
//getElementsByClassName
// tag er mto same index er mardhome korte hbe
// akta class thklayo [0] index dite hbe prothom index 0 er pore joto barbe totu[1][2][2]
// akhane same class e 2ta value tai prothon index[0] abong 2nd index [1]

document.getElementsByClassName("hd1")[0].innerHTML = "How are you";
document.getElementsByClassName("hd1")[1].innerHTML = "How are you";


document.getElementsByClassName("para2")[0].innerHTML = "amio valobashi";
document.getElementsByClassName("para2")[1].innerHTML = "amio valobashi";
document.getElementsByClassName("para2")[2].innerHTML = "amio valobashi";
document.getElementsByClassName("para2")[3].innerHTML = "amio valobashi";
*/



// class: 33 // query selector

/*
// getElementById()
// getElementsByTagName()
// getElementsByClassName()
// querySelector()     // querySelector() diya opore 3ta selector er kaj kora jai
// class er age . and id er # dite hbe

document.querySelector("#pid").innerHTML = "Yes this is paragraph";        // id select
document.querySelector(".pid").innerHTML = "Yes this is paragraph";       // class select
document.querySelector("h4").innerHTML = "Yes this is paragraph";       // tag select
*/

/*
document.querySelector("a").innerHTML = "new text";                  // a tag select
document.querySelector("li a").innerHTML = "new text";              // li vitor a tag select
document.querySelector("ul li a").innerHTML = "new text";          //list tag select
// document.querySelector("li a").innerHTML = "new text";         //avabayo list tag select kora jai
// document.querySelector("div a").innerHTML = "new text";       //div er vitor link select
document.querySelector(".my-div a").innerHTML = "new text";       //class er vitor link select
*/

/*
//getElementsByClassName/getElementsByTagName javabe index[0] er mardhome 
// select korace akoi vabe querySelectorAll er mardome kora jai

document.querySelectorAll("h2")[0].innerHTML = "this is text";
document.querySelectorAll("h2")[1].innerHTML = "this is text";
document.querySelectorAll("h2")[2].innerHTML = "this is text";
document.querySelectorAll("h2")[3].innerHTML = "this is text";
document.querySelectorAll("h2")[4].innerHTML = "this is text";
*/




// CLASS: 34 Event Handler to onclick event
/*
function myMessage1(){
   alert("I am button 1");
}

function myMessage2(){
   alert("I am button 2");
}

function myMessage3(){
   alert("I am a paragraph");
}

function myMessage4() {
   document.querySelector("#heading").innerHTML = "I am  a heading";
}

function myMessage5() {
   var myVar = document.querySelector("#heading1");
   myVar.innerHTML = "I am a second heading";
}
*/

/*
function myMessage6() {
   var myVar = document.querySelector("#heading2");
   myVar.innerHTML = "I am 3rd heading";
}
*/

/*
var myVar = document.querySelector("#myimg");
function myimg1() {
   
   myVar.src = "img/1.jpg";
}

function myimg2() {
   myVar.src = "img/2.jpg";
}
*/

/*
function myimg1() {
   document.querySelector("#myimg").src = "img/2.jpg";
}
function myimg2() {
   document.querySelector("#myimg").src = "img/3.jpg";
}
*/


// CLASS:35   DOM
// Document Object Model - document object can access and manipulate HTMl
// Document object model er mardhome amra....
// Find/get,change,add, or delete HTMl elements
// Document object er 2ti important bissoy
// Dom methods - getElementById()  methods er pashe () first bracket thkbe
// Dom properties = innerHTML,      properties er pashe () first bracket thkbe nah

// Find/get
// Methods
// Document.getElementById(id)- Find element by id
// Document.getElementsByTagName(name)-Find elements by tag name
// Document.getElementsByClassName(name)-Find elements by className

//Changing HTML Elements
//Property

/*
// element.innerHTML = new Html content
// element.attribute = new value
// element.style.property = new style

var link = document.getElementsByTagName("a")[0];
link.innerHTML = "Tarun mitra";
link.style.textDecoration = "none";
link.style.color = "white";
link.style.fontSize = "20px";
link.href = "https://www.facebook.com/";
link.style.backgroundColor = "orange";
link.style.padding = "20px";
link.style.margin = "10px";
link.style.fontWeight = "900";

*/


/*
// creating html element

var heading3 = document.createElement("h1");   // je tag create korbo oi tag er nam
var text = document.createTextNode("Tarun mitra");  //abong tag er vitor ja dibo tai
heading3.appendChild(text);   // heading3 vitor je text thkbe tai text appendChild er mardhome add korlam

var myDiv = document.getElementById("my-div");   //div select korte hbe tai id my-div nilam karon div er vitor e h1 tag dukabo
myDiv.appendChild(heading3)


var paragraph = document.createElement("p");
var text = document.createTextNode("Bangladesh is a small country");
paragraph.appendChild(text);

var myDiv = document.getElementById("my-div"); // kar vitor jabe my div er vitor e
myDiv.appendChild(paragraph);



// Element remove korbo
// akhane jahoto  h2 mydiv er vitor ace tai my-div ke Find kore nite hbe
// jahato opore allready find kora ace tai noton kore korlam nah comment out kore raklam bujar jonne


var myDiv = document.getElementById("my-div");   //div select korte hbe tai id my-div nilam karon div er vitor e h1 tag dukabo
myDiv.appendChild(heading3);
var heading2 = document.getElementsByTagName("h1")[1];
myDiv.removeChild(heading2);



// noton tag nilam and viotor e text add korlam
// myDiv opore find kora ace tai noton kore nilam nah


var heading0 = document.createElement("h1");
var text0 = document.createTextNode("My name is tarun mitra");
heading0.appendChild(text0);
myDiv.appendChild(heading0);

// kinto protibar text nichar dike add hoi kinto abr opore add korbo

var headTop = document.createElement("h1");
var text1 = document.createTextNode("TOP HEADING");
headTop.appendChild(text1);
var head1 = document.getElementsByTagName("h1")[0];
myDiv.insertBefore(headTop, head1);  //karpor element add hbe (headtop,before,noton element age)(head1,after,tarpor porar element) // Create an html element with insertBefore(before,after) 

/*
// kivabe class khujbo 
// agolo sob console e try korte hbe mone rakhar jonne note kore rakhlam
document.getElementById("my-div").classList;
// class add 
document.getElementById("my-div").classList.add("new-add");
check add hoyace kina: document.getElementById("my-div").classList;
//class remove
document.getElementById("my-div").classList.remove("new-add");
check remove hoyace kina: document.getElementById("my-div").classList;
*/
// replace child google search kore shikha nite heb

// Method
// element.setAttribute(attribute, value) - change the attribute value of an html element



//CLASS: 36 // image slider

var photos = ["img/1.jpg","img/2.jpg","img/3.jpg"];   // amra sob golo img ke akta array vitor niya nilam
var imgTag = document.querySelector("img");               // img ke find korlam jar vitor img ta kaj korbe abr ei find kora img kr akta variable er mordha rakha dilam

var count = 0;                      // array vitor img er index count korar jonne count variable nilam
function next() {
   count++;                         // next e click korle index  1 kore barbe 

   if (count >= photos.length) {           // total length index[3] hole bha soman hole abr zero thake count hbe
         count = 0;
         imgTag.src = photos[count];
   }else{
      imgTag.src = photos[count];
   }
   
}

function prev() {
   count--;                         // next e click korle index  1 kore kombe 

   if (count < 0) {
      count = photos.length - 1;
      imgTag.src = photos[count];
   } else {
      imgTag.src = photos[count];
   }

}

