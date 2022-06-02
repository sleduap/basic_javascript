// object literals

let user = {
    name : "Sudarshan",
    age : 20,
    email : "sleduap@gmail.com",
    accessories: ["laptop","mobile"],
    blogs:[{title:"dota2",like:20},{title:"lol",like:30},],
    printData(){
        console.log(this.accessories)
        console.log(this.blogs)
       this.blogs.forEach(element => {
           console.log(element.title)
           
       });
       console.log(this.blogs[1]["title"])
    }
};
console.log(user.name)
console.log(user["name"])
user["location"]="KTM";
user.printData()
console.log(user.blogs[1]["like"])


//class
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  let myCar = new Car("Ford", 2014);
  console.log("My car is " + myCar.age() + " years old.");

class test{
    constructor (name,age){
        this.name = name;
        this.age = age;
    }
    ageCalc(){
        return `Age of ${this.name} is ${this.age}`;
    }

}

let totalage = new test("ram",16);
console.log(totalage.age);
console.log(totalage.ageCalc);

// Math Object
console.log(Math.PI);
console.log(Math.random())
console.log(Math.round(Math.random()))
console.log(Math.round(Math.random()*100))


const userDetail = {
    name : "UserName",
    age: 10
}

const userDetail2 = {
    name : "UserName",
    age: 10
}

const userDetail3 = userDetail


console.log(userDetail, userDetail2, userDetail3)

userDetail3.name="sudarshan"

console.log(userDetail, userDetail2, userDetail3)

let a= 100
let b = a
console.log(a,b)
b=200
console.log(a,b)
