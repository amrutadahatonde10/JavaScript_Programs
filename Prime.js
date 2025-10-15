let n = 1;
let isPrime = true;

if(n < 2){
    console.log("not a prime number"); 
} else {

    for(let i = 2; i <= n/2; i++){
        if(n % i === 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        console.log("prime number");
    }
    else {
        console.log("not a prime number");
    }
}

// check prime number