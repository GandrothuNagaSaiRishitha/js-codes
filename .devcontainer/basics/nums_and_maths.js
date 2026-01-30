//const balance = new Number(400)
//console.log(balance)    //prints in the form of a object
//console.log(balance.toFixed(2)) //returns the number upto two decimal places

// Functions in Js

function changeMake(object1){
    object1.make="Honda"
}

const CarObject={
    make:"Toyota",
    year: 2029,
    name:"riaz",
};

console.log(CarObject.make) //toyota
changeMake(CarObject)
console.log(CarObject.make) //change reflected after passing in the function

// nested functions

function squared(a,b){
    function square_num(x){
        return x*x
    }
    return square_num(a)+square_num(b)
}

console.log(squared(4,6))


//anonymous functions (akin to lambda)
const func= function(num){
    return num*num
}

console.log(func(4))

