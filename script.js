// <!-- Question - 01 --> ?
let arr=[1,5,6,8,9,10,100,254,7005];

arr.sort((a,b) => {
        return a-b;
});
document.write('Q - 01 <br>');
document.write(arr[arr.length-1 ]);
document.write('<br>' + '<br> <hr>');

//======================================

// <!-- Question - 02 --> ?

// var string = prompt('Enter a string value');
var string = 'string value';
var strLen = string.length;
var revstr = '';
 for(var i= strLen-1;i>=0;i--){
    revstr += string[i]
 }

//  console.log(`${string} revers value is = ${revstr}`);
document.write('Q - 02 <br>');
document.write(" value is =  "+ string+ "<br> " + " Reverse value is =  " + revstr);

document.write('<br> <br> <hr>');

//======================================

// <!-- Question - 03 --> ?
document.write('<br>' + '<br>');
document.write('Q - 03 <br>');
var arr3 = [1,2,3,19,5];
 arr3.sort((a,b) => {
    return a-b;
 });

 document.write(arr3);

 document.write('<br>' + '<br> <hr>');


// with FOR loop

//  for (var i=1; i<=5 ; i++){
  
//     document.write(i);
//  }  
document.write('<br>' + '<br>');

 //======================================
 
 // <!-- Question - 04 --> ?
 document.write('Q - 04 <br> ');
 function evenNum (n){
    let sum = 0;
    for (let j = 2; j <= n; j += 2) {
      sum += j;
     
    }
    
    return sum;
 }
 document.write(evenNum(4));

//  for (var a=1; a<=10; a++){
//     if(a % 2 == 0){
        
//         document.write(a)
//     }
//  }
document.write('<br><br> <hr>');
 //======================================

 // <!-- Question - 05 --> ?

 function isPrime (n){

    if (n < 2)
        return `${n} is not a prime`

    for(let i = 2; i < n; i++){
        if (n % i === 0) {   
            return `${n} is not a prime number`
        }
    }
    return `${n} is a prime number`
 }
 document.write('Q - 05 <br> ');
 document.write(isPrime(10))

 document.write('<br> <br> <hr>');

  //======================================

 // <!-- Question - 06 --> ?
 //Second largest number...

 document.write('Q - 06 <br> ');
 let arr06=[1,5,6,8,9,10,20,32,72];

arr06.sort((a,b) => {
        return a-b;
});
document.write(arr06 + '<br> <br>');
document.write(arr06[arr06.length-2 ]);



document.write('<br> <br> <hr>');
  //======================================

 // <!-- Question - 07 --> ?
//Remove duplicates...........

document.write('Q - 07 <br> ');
 let arr07 = [1,1,5,10,5,0,9,80,100,15,6,7,7];
 let newvalue = [ ...new Set(arr07)];

 newvalue.sort((a,b) => {
    return a-b;
 });

document.write(newvalue + '<br><br> <hr>');

// console.log(newvalue)

  //======================================

 // <!-- Question - 08 --> ?
//Sum of an array..................

 document.write('Q - 08 <br> ');
 const numbers = [10,10,10];

 let sum = 0;

 numbers.forEach(numb => sum += numb);

 document.write('Sum of an array = ' + sum + '<hr>');

   //======================================

 // <!-- Question - 09 --> ?
 document.write('Q - 09 <br> ');

 function demo (){
   var num11 = document.getElementById('number').value;
   var isPrime;

   for(var i=2; i<= num11; i++) {
      isPrime = 1;


      for(var j=2; j<=i/2; j++) {
         if(i % j == 0){
            isPrime = 0;
            break;
         }
      }

      if(isPrime == 1){
         document.write(i + '<br>');
      }
   }

 }
 
    //======================================

 // <!-- Question - 10 --> ?

 document.write('<hr>'+ 'Q - 10 <br> ');
 const num10s = [1,2,3,4,5,6,7,8,9,10];
 let maxnum = -Infinity
 let minnum = Infinity

 for(let num of num10s){
   if(num > maxnum)
      maxnum = num

      if(num < minnum)
      minnum = num
 }
document.write(num10s + '<br><br> Max-num = ' + maxnum);
document.write( '<br> Min-num = ' + minnum + '<br> <hr>');

 
//======================================

 // <!-- Question - 11 --> ?
// eg: 6 = 1*2*3*6 
 function factorial(n){
   if (n === 0 || n === 1) {
       return 1;
     } else {
       return n * factorial(n - 1);
     }
}
function findfact(n){
   const fact =  factorial(n);
   console.log(fact)
}
findfact(3);


//======================================

 // <!-- Question - 12 --> ?
function demo2 (){
   var str = document.getElementById('number1').value;
   var len = str.length;
   var msg = 'it is a palindrome'
   for(var i = 0; i < len/2; i++){
      if(str[i] != str[len - 1 - i]){
        var msg = 'it is not a palindrome'
      }
   }
   document.write(`${str}: ${msg}` );

   
}

// ======================================

//  <!-- Question - 13 --> ?

 function demo3(){
   var str13 = document.getElementById('number2').value;
   var temp = str13;
   var noOfDigits = str13.toString().length;
   var sum = 0;
   while(temp>0){
      var digit = temp%10;

      sum += digit ** noOfDigits;

      temp = parseInt(temp/10);

   }
   if(sum == str13){
      document.write(`${str13} is an armstrong number` );
   }else{
      document.write(`${str13} is not an armstrong number` );
   }
 }
 document.write( '<br>');

//  ======================================

//  <!-- Question - 14 --> ?



   var a = 0, b = 1;
   document.write('Q14 ? <br> ' +a);
   document.write(b);
   // console.log(a);
   // console.log(b);

   for(var i=0; i<=10; i++){
      var temp = a + b;
      document.write(temp);
      // console.log(temp);
      a = b;
      b = temp;
   }
   document.write( '<br> <hr>');
  

//  ======================================

//  <!-- Question - 15 --> ?

function demo4 (){
   var start = document.getElementById('one').value;
   var end = document.getElementById('two').value;
   var isPrime;
   var sum = 0;

   if(start < 2)
      start = 2;

      for(var i=start; i<= end; i++) {
         isPrime = 1;

         for(var j=2; j<= i/2; j++) {
            if(i%j == 0) {
               isPrime = 0;
               break;
            }
         
         }
         if(isPrime ==1) {
            sum = sum + i;
            document.write( i + '<br>');

         }
      }
        
      document.write( "Totel prime number: " +sum);

        
}
document.write( '<br> <hr>');

//  ======================================

//  <!-- Question - 16 --> ?



function multiples(n) {
   let arr17 = [];
   for (let i = 3; i < n; i++) {
       if (i % 3 === 0) {
           arr17.push(i);
       }
       if (i % 5 === 0) {
           arr17.push(i);
       }
   }
   console.log(arr17.reduce((total,num)=>total+num));
}
multiples(10)
// multiples(parseInt(prompt()));


//  ======================================

//  <!-- Question - 17 --> ?

function demo6(){
   var users = document.getElementById('oddandeven').value;
   var evencount = 0;
   var oddcount = 0;

   for(var i=1; i<= users; i++) {
      if(i%2 === 0){
         // document.write(i+ '<br>');
         evencount = evencount+i;
         
      }else{
         
         oddcount = oddcount+i;
      }
     
   }
   document.write('Totel sum of Even num: ' +evencount);
   document.write( '<br>' +  'Totel sum of odd num: ' +oddcount);

}
document.write('<br>')
//  ======================================

//  <!-- Question - 18 --> ?

// const fArr = [1,2,3,4,5];
// const bArr = [3,4,5,6,7];

// const intersectionArr = fArr.filter((curlElm) => {
//     return fArr.includes(curlElm);
// });

// const unionArr = [ ...new Set([ ...fArr, ...bArr])];
// document.write(unionArr);

let union=(arr01,arr02)=>{
   let arr18=[];
   let n1=arr01.length;
   let n2=arr02.length;
   for(i=0;i<n1;i++){
       arr18[i]=arr01[i]
   }
   for(j=0;j<n2;j++){
       arr18[n1+j]=arr02[j]
   }
   console.log(arr18.sort((a,b)=>a-b));
   
   }
   union([5,8,9],[5,9,48])

   document.write('<br>')
//  ======================================

//  <!-- Question - 19 --> ?

//  sumOfDigits(12345)

var num = 12345;
var sum19 = 0;
document.write( 'Q19? <br>' +'Number: ' + num + '<br>');

while(num != 0){
   sum19 += num%10;
   num = parseInt (num/10);

}
document.write('Sum of digit Number: ' + sum19 + '<br> <hr>');

//  ======================================

//  <!-- Question - 20 --> ?
 var string = ('Please enter a string.');
 const reg = /[aeiou]/gi;
 var chars = string.match(reg);
 console.log(string);
 console.log( chars.join(','));
 console.log(chars.length);