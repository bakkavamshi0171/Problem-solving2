// WAP to print the sum of non prime numbers
let num3 = "17569";
let sumOfNonPrime=0
for (i of num3){
    if(i > 1){
        for(j=2;j<i;j++){
            if(i%j==0){
                sumOfNonPrime +=Number(i);
                break;
            }
        }
    }
}
console.log(sumOfNonPrime);


// WAP to check whether prime prime numbers count is highest or not
let number = "467528963";
let sumOfPrime1 = 0, sumOfNonPrime1 =0;
for (i of number){
    if(i>1){
        c = 0;
        for(j = 2; j < i; j++){
            if(i % j==0){
                sumOfNonPrime1++;
                c++
                break
            }
        }
        if(c==0){
            sumOfPrime1++;
        }
    }
}
console.log("count of prime numbers is "+ sumOfPrime1);
console.log("count of non prime numbers is "+ sumOfNonPrime1);
let check = (sumOfPrime1 > sumOfNonPrime1)? "prime numbers are more in count" : (sumOfNonPrime1 == sumOfPrime1)? "both prime and non prime numbers are equal in count" : "Non Primes are more in count";
console.log(check)

// WAP to print sum of prime numbers
let num1 = "17659";
let SumOfPrimeNumbers = 0;
for ( i of num1){
    if(i>1){
        let c=0;
        for(j=2; j< i ; j++){
            if(i % j==0){
                c++;
                break
            }
        }
        if(c==0){
            SumOfPrimeNumbers += Number(i);
        }
    }
}
console.log(SumOfPrimeNumbers)

// WAP to check whether prime sum is bigger or non-prime sum is bigger
let num = "17659";
let sumOfPrime2 = 0, sumOfNonPrime2 =0;
for(i of num){
    let c =0;
    if(i>1){
        for(j=2; j<i; j++){
            if(i % j==0){
                sumOfNonPrime2 += Number(i);
                c++;
                break;
            }
        }if(c==0){
            sumOfPrime2 += Number(i);
        }
    }
}
let res3 = (sumOfPrime2 > sumOfNonPrime2)? `prime Sum is bigger ${sumOfPrime2} then ${sumOfNonPrime2}` : (sumOfPrime2 == sumOfNonPrime2)? `both are equal in sum` : `Non Prime sum is bigger then ${sumOfNonPrime2} then ${sumOfPrime2}`;
console.log(res3);

// WAP Factorial experssion 
let num2 =5
fact = 1,res1=""
for(i=1;i<=num2;i++){
    fact=fact*i
    if(i<num){
        res1=res1+i+"*"
    }
    else{
        res1=res1+i
    }
}
console.log(res1+" = "+fact)
