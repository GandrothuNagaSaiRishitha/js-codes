let nme="rishi"
let valueInVariable=Number(nme)
console.log(valueInVariable)    //NaN (not a number) this is one of the reasons why js sucks according to me yeahh
console.log(typeof valueInVariable) //this converted a string into a number which was not originally a number (which is logically wrong)

//"rishi"=> NaN
//similarly "33abc" ==> NaN (Not a number)

let LoggedIn=1
console.log(typeof (Boolean(LoggedIn))) //Boolean(True)

let isLoggedIn= ""
console.log(Boolean(isLoggedIn))    //False (empty string==> false)

let isLog="abc"
console.log(Boolean(isLog)) //True (non empty string)

let k="1"+2+2
console.log(k)
console.log(typeof k)

let m=2+1+"2"
console.log(m)
console.log(typeof m)

//prefix and postfix notations
let Counter=0
console.log(Counter)
console.log(++Counter)
console.log(Counter++)
