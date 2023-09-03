// addition of number and string
let a = "Hello"
console.log(a+5)

// typeof operator to find the type of datatype
let b = Symbol("Hello this is Symbol")
let c = "Hello this is String"
console.log(typeof b,typeof c)

// using const object, cannot chamge a const object to number
const d = {
    "Ram": "Sita",
    "Rahul": undefined,
    "Raj": "yash"
}
// d = 5
console.log(d["Raj"])

//  Adding new key in above code
const e = {
    "Ram": "Sita",
    "Rahul": undefined,
    "Raj": "yash"
}
e["Sam"]="sam"
console.log(e)

// creating a word:meaning dictionary
const dict = {
    CPU:"Central Processing Unit",
    GPU:"Graphics Processing Unit",
    RAM:"Random Access Memory",
    ROM:"Read-Only Memory",
    CD:"Compact Disk"

}
console.log(dict.ROM)
