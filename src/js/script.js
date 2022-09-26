let userName = "Andrew"
let userAge = 21
let userPets = ["Cat", "Dog"]
let userBalance = 1200
const EVERY_DAY_SPENDING = 15.3
let everyDaySpendingPerPet = 2.4
let daysSurvived = 0

//console.log("Text", variable) allows you to write to the console

console.log("User Name", userName)
console.log("User Age", userAge)
console.log("User Balance", userBalance)
console.log("Every day spending per pet", everyDaySpendingPerPet)
console.log("Days survived", daysSurvived)

userPets.push("Hamster")
userPets.pop()

while (userBalance > 0) {
	let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length
	userBalance -= spending
	daysSurvived++
}

console.log("User have sufficient money for " + daysSurvived + " days")

function nameVertical(name) {
    console.log(name)
    for(i = 0; i< name.length; i++){
        console.log(name.slice(i,i+1))
    }
}
nameVertical("Florian")

function code(n) {
    return           (n < 100) ? "Not a valid code" :  
    (n>=100 && n<200) ? "Informational Responses":
    (n>=200 && n<300) ? "Successful Responses":
    (n>=300 && n<400) ? "Redirection Messages" :
    (n>=400 && n<500)? "Client Error Responses":
    (n>=500 && n<600)? "Server Error Responses" :
    "Not a valid code"
 }
console.log(code(321));

function compareVariables(var1, var2) {
    console.log(var1)
    console.log(var2)
    if(var1 === var2){
        console.log("The two variables have the same value and type")
    }
    else if(var1 == var2){
        console.log("The two variables have the same value but not the same type")
        console.log("the type of var1 is" + var1.type)
        console.log("the type of var2 is" + var2.type)
    }else{
        console.log("The two variables do not have the same value nor the same type")
    }
}

// After completing the function pass different values instead of var1 and var2 to test your function
compareVariables ('21',userAge);

function fibonacci(n) {
    var a = 1
    var b = 1
    var sum = 2
    if(n>=0){
        console.log(0)
    }
    if(n>=1){
        console.log(1)
        console.log(1)
    }
    while(sum <= n){
        if (a<=b){
        a = a+b;
        sum = a + b;
        console.log(a)
        }
        else{
            b = a+b;
            sum = a+b;
            console.log(b)
        }

    }
}

// After completing the function pass different numbers instead of n and test the result.

fibonacci(0);




