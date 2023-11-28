// for (let i = 0; i < 10; i++) {
// 	console.log(i);
// }

// // Count down from 10 to 1 
// for (let i =10; i > 1; i--){
//     console.log(i)
// }

// Output odd mnumbers from 1 to 10
// for (let i = 0; i  < 10; i++){
//     if(i % 2 !== 0){
//         console.log(i)
//     }
// }


// Output even number from 1 to 10
// for (let i = 2; i < 10; i++){
//     if(i % 1 !== 0){
//         console.log(i)
//     }
// }

// Now, write a for loop that iterates from 1 to 20. The loop should:
// Print “prime” for all prime numbers.
// Print “even” for all even numbers.
// Print “odd” for all odd numbers.
// Treat 2 as an even number and 1 & 3 as odd, rather than prime.
// for (let num = 1; num <= 20; num++) {
//     if (num === 2 || num % 2 === 0) {
//         console.log(`${num} is even`);
//     } else {
//         let isPrime = true;
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             console.log(`${num} is prime`);
//         } else {
//             console.log(`${num} is odd`);
//         }
//     }
// }

// const str = "Hello World";

// for (const i in str) {
// 	console.log(str[i]);
// }

// for(num = 10; num <= 10 && num > 0;num--){
//     if(num % 2 == 0)
//     console.log(num + " even")
// }

// const str = "Hello World";

// for (const c of str) {
// 	console.log(c);
// }

// for (let i = 0; i < str.length; i++) {
// 	if (str[i] == "l") {
// 		continue;
// 	}

// 	console.log(str[i]);
// }

// let x = 30;

// while (x > 0) {
// 	x /= 2;
// 	x--;

// 	if (x % 1 != 0) {
// 		break;
// 	}
	
// 	console.log(x);
// }

// let x = 10

// while(x >= 0){
//     console.log(x)
//     x--
// }

// let i = 3

// while(i < 35){
//     if(i % 3 === 0){
//         console.log(i)
//     }
//     i++
// }

// Print integers in multiples of 5 as long as they are less than 100.

let i = 5

while (i < 100){
    if(i % 5 === 0){
         console.log(i)
    }
    i++
}

// Print integers between 0 and 20 with the following conditions
// All numbers divisible by 2 should be multiplied by 3 before they are output.
// All other integers should not be output.

let a = 2

while (20 <= a >= 0){
    if(a % 2 === 0){
        console.log(a * 3)
    }
    a++
}