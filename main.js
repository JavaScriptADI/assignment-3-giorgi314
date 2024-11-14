// 1 
console.log("task 1")
for(let a = 1; a <= 10; a++){
    console.log(a);
}

// 2
console.log("task 2")
for(let a = 10; a >= 1; a--){
    console.log(a)
}

// 3
console.log("task 3")
let sum = 0; //
for (let i = 1; i <= 50; i++) {
    sum += i;
}
console.log(sum);

//4
console.log("task 4")
for (let i = 0; i < 10; i += 2) {
    console.log(i);
}
//in this loop there are 5 iterations , because after 5th
// iteration i will be 8, next step is to add 2 ,so i will become
// 10, i < 10 will be false and function will finish there. 
// it won't go into {} block anymore.  

//5
console.log("task 5")
//  break statement ends the iritations.

for( let a = 1; a < 400; a *= 2){
    if(a > 40){
        break;
    }
    console.log(a);
}

//6
console.log("task 6")
// continue statement skips the iretation.
let s = 0
for(b = 50; b >= 1; b -= 2){
    if(b % 3 !== 0){
        continue;
    }
    s += b;
    console.log(b);
}
console.log(`sum= ${s}`);


//11
console.log("task 11")

for(let x = 1; x < 100; x++){
    if((x % 5 === 0) && (x % 3 === 0)){
        console.log("FizzBuzz")
    }
    else if(x % 3 === 0){
        console.log("Fizz");
    }
    else if(x % 5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(x);
    }
}

//13
console.log("task 13")
let z = 0;
for(let y = 1; y <= 1000; y++){
    if(y % 2 !== 0){
        continue;
    }
    z += y
}
console.log(z);

//14
console.log("task 14")

let n = 0;
for(let m = 1; m <= 1000; m++){
    if((m % 3 !== 0) && (m % 5 !== 0)){
        continue
    }
    n +=m;
}
console.log(n);


//15

console.log("task 15")

let o = 0;
for(let p = 1; p <= 1000; p++){
    if((p % 3 !== 0) || (p % 5 !== 0)){
        continue
    }
    o +=p;
}
console.log(o);

