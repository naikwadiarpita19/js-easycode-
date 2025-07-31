//  Switch

// eg., 1]

let month="september"

switch (month){
    case"january":
    console.log("it is 1st month");

    case"february":
    console.log("it is 2nd month");

    case"march":
    console.log("it is 3rd month");

    case"april":
    console.log("it is 4th month");

    case"may":
    console.log("it is 5th month");

    case"june":
    console.log("it is 6th month");

    case"july":
    console.log("it is 7th month");

    case"august":
    console.log("it is 8th month");

    case"september":
    console.log("it is 9th month");

    case"octember":
    console.log("it is 10th month");

    case"november":
    console.log("it is 11th month");

    case"december":
    console.log("it is 12th month");
}


// eg., 2]

let color="pink"

switch(color){
    case"red":
    console.log("it is red");
    break;

    case"purple":
    console.log("it is purple");
    break;

        case"orange":
    console.log("it is orange");
    break;

        case"skyblue":
    console.log("it is skyblue");
    break;

        case"pink":
    console.log("it is pink");
    break;

    default:
        console.log("no match");
}



//  eg., 3]

let fruits=prompt("you are looking for ?")

switch(fruits){
    case"mango":
    console.log("it is mango");
    console.log("it is 50rs kg");
    break;

    case"apple":
    console.log("it is apple");
    console.log("it is 100rs kg");
    break;

    case"grapes":
    console.log("it is grapes");
    console.log("it is 50rs kg");
    break;

    case"banana":
    console.log("it is banana");
    console.log("it is 50rs dozen");
    break;

    case"orange":
    console.log("it is orange");
    console.log("it is 60rs kg");
    break;

    default:
        console.log("no available");
        break;
}
console.log("thanku");



// nested loop (loop within loop)

let a=5

if(++a){
    console.log("a")
    if(a++){
        console.log("a")
    }
}