 //UC1
 var prompt = require("prompt-sync")();
 //Genrate 10 Random 3 digit number and find second large and small
 console.log('UC1-Genrate 10 Random 3 digit number and find second large and small'); 
 var randomNumbers = new Array();
 var result=0;
 for (let i = 0; i <10; i++) 
 {
   var random = Math.floor(Math.random() *900+100);
   //push the random number into array
   randomNumbers.push(random);
 }
 console.log("The Random NUmbers :");
 console.log(randomNumbers);
 //function to find  second largest element
 function SecondMax()
 { 
     // get the max element in array
     var max = Math.max.apply(null,randomNumbers);
     //find the index of maximum element
     maxi = randomNumbers.indexOf(max);
      //replace max in the array with infinity
     randomNumbers[maxi] = -Infinity; 
     var secondMax = Math.max.apply(null,randomNumbers);
     randomNumbers[maxi] = max;
     return secondMax;
 }
 //calling the function using reduce 
 result=randomNumbers.reduce(SecondMax);
 console.log(`Second maximum element is ${result}`);
 //function to find second minimum element in array
 function SecondMin()
 { 
     var min = Math.min.apply(null,randomNumbers), 
     mini = randomNumbers.indexOf(min);
     //initialize the first minimum elemnt as infinity
     randomNumbers[mini] = Infinity; 
     var secondMin = Math.min.apply(null,randomNumbers);
     randomNumbers[mini] = min;
     return secondMin;
 }
 result=randomNumbers.reduce(SecondMin);
 console.log(`Second minimum element is ${result}`);

 //UC-2 Refactor the code using sort function
 console.log('UC-2 Refactor the code using to find 2nd min and max');
 randomNumbers.sort();
 console.log("After sorting the element in array ");
 console.log(randomNumbers);
 console.log(`Second minimum element is ${randomNumbers[1]}`);
 console.log(`Second maximum element is ${randomNumbers[randomNumbers.length-2]}`);

// UC3
console.log('UC3-Print factors and Prime factors of a Number')
 var primeFactors=new Array();
 var factors=new Array();
 function FindPrimeFactors(num)
 {
     let isPrime = 1;//to check whether the number is prime or not 
     for (i = 2; i<= num; i++)
     {
        if (num % i == 0)//used to find the factors of the number
        {
            factors.push(i);
            isPrime = 1;
            for (j = 2; j <= i / 2; j++) //to iterate the loop if it divisble by any of prime factor
            {
                 if (i % j == 0)//used to find prime Number from the factors
                 {
                     isPrime = 0;
                     break;
                 }
             }
             if (isPrime == 1)
             {
                 primeFactors.push(i); 
             }
         }
     }
 }
 //read input from user
 num = Number(prompt("Enter a number: "));
 FindPrimeFactors(num);
 console.log(`The factors ${num} is ${factors}`);
 console.log(`The Prime factors ${num} is ${primeFactors}`);

//UC4
console.log("UC4-Sum of three Numbers is equal to Zero")
var num = parseInt(prompt("Enter number of elements :"));
var numbersArr = new Array();

//Funcion for find the  triplets in aray
function findTriplets(num) 
{
  let flag = false;
 for (let i = 0; i < num; i++)
 {
   var number= parseInt(prompt(`Enter ${i+1} Number : `));//Ask user to enter number 
   numbersArr.push(number);//push the number to array
 }
  console.log(`The Stored Numbers :${numbersArr}`);
  for (let i = 0; i < numbersArr.length - 2; i++) 
  {
    for (let j = i + 1; j < numbersArr.length - 1; j++) 
    {
      for (let k = j + 1; k < numbersArr.length; k++) 
      {
        if (numbersArr[i] + numbersArr[j] + numbersArr[k] == 0) 
        {
          console.log(`The triplets are ${numbersArr[i]} ${numbersArr[j]} ${numbersArr[k]}`);
          flag = true;
        }
      }
    }
  }
  if (flag == false) 
  {
    console.log("No triplets exists");
  }
}
findTriplets(num);

//UC5- Print the repeated digit twice i.e 11,22,33,44 ...
console.log('UC5- Print the repeated digit twice i.e 11,22,33,44 ...')
var repeatedDigits = new Array();
for (let i = 0; i <=100; i++) 
{
  if (i >10) 
  {
    result = checkDigits(i.toString());
    if (result == true) 
    {
        repeatedDigits.push(i);
    }
  }
}
console.log(repeatedDigits);
function checkDigits(number)
 {
    var numArr = number.split('');//spliting number into character array
     i=0;
      if (numArr[i] == numArr[i+1]) //check both number are same by verfiying index of number are same
      {
          return true;
      }
      return false;
  }
