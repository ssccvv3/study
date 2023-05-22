let random = Math.random();
if (random < 0.5) {
    console.log("Your number less than 0.5")
    console.log(random);
}
if (random >= 0.5) {
    console.log("Your number more than 0.5")
    console.log(random);
}

const dayOfWork = prompt()
const dayOfWeek = "Friday";

if(dayOfWeek === "Monday") {
    console.log("ugh... i hate monday!! ")
} else if(dayOfWeek === "Saturday"){
    console.log("wow !!! its SATURDAY!! ")
} else if(dayOfWeek === "Friday"){
    console.log("ITS FRIDAY!! ")
}

0-5 free
5-10 child $10
10-65 adult $20
65+ senior $10

const age = 30;
if (age < 5) {
    console.log(" You are a baby. you get in free!")
} else if(age < 10) {
    console.log("you are a child you pay $10")
} else if(age < 65) {
    console.log("you are a adult pay $20")
} 
