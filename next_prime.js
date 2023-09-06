// Return the next higher prime number

// Write a function that takes two numbers, say x and y, as arguments. Check if x is divisible by y. If yes, return x. If not, return the next higher natural number that is divisible by y


// ----------------------------------- My Code ------------------------------------

a = 7
let store  = []
let primes = [];
let max = 3000;


// get prime numbers upto 3000

for (let i = 2; i <= max; i++)
{
    if (!store [i])
    {
        primes.push(i);
        for (let j = i << 1; j <= max; j += i)
        {
            store[j] = true;
        }
    }
}

// next prime number of a given number

let min = 0
for(let i= 0 ; i<primes.length ; i++){
    if(a>primes[i]){
        min = primes[i+1]
    }
}
console.log(min)


// ------------------------------------ Solution Code ---------------------------------


function myFunction( a ) {
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    }
    let n = a;
    while (!isPrime(n)) n++;
    return n
}