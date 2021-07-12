let sum: number = 0;
let count: number = 0;

for (let i = 2; count < 30 ; i++) {
    let isPrime:boolean = true;
    if ( i == 2){
        sum += i;
        count++;
        continue;
    }

    for (let j = 2 ; j <= Math.sqrt(i); j++) {
        if ( i % j == 0 ) {
            isPrime = false;
            break;
        }
    }

    if (!isPrime){
        continue;
    }

    sum += i;
    count++;
}

function isPrime(number:number){
    let isPrime: boolean = true;
    if(number < 2 ){
        isPrime = false;
    }else if(number > 2){
        for( let i = 2 ; i < Math.sqrt(number); i++){
            if(number % i == 0){
                isPrime = false;
                break;
            }
        }
    }

    return isPrime;

}

let array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
let total: number = 0;
for (let number of array) {
    if (isPrime(number)) {
        total += number;
    }
}
console.log("Tổng các số nguyên tố trong mảng trên là: " + total);

