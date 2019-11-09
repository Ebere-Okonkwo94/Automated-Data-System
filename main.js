        
var name = 'Ebere';
console.log(name);

var car = 'Nissan', myname = 'tola', age = 12;
console.log(myname);

var y = '5' + 3 + 2;

var x=3, y=6; z=9 //global variables

function addition(a, b){
    return a + b;
}

console.log(addition(10, 15));


function subtraction(a, b){ //this method is redundant, involving bulky codes.
return a - b;
}
subtraction (5,2);
console.log(subtraction(5,2));
console.log(addition(100, 150));

function multiply(x, y){
console.log(x * y);
}
multiply(10,6);

var addition = function (x, y){ //anonymous function (using variables; we don't know what the output would be)
console.log(x + z) //operation involving local and global variable
}
addition(2, 5);

const additionEsSix = (a, b) => {  //alternate way of declaring functions in eS6 (arrow function)
console.log(a + b)
}
additionEsSix(7, 6);

const additionEsSixx = (a, b) => a + b  //can be rewritten this way since it is just one line of code.no need to use 
                                        //return again. but you'd have to make use of console.log
console.log(additionEsSixx(7, 9));

let vehicle = {type:"fiat", model:"500", color:"white"};

console.log(vehicle.type);
console.log(vehicle["model"]);  //in using this method, the value has to be enclosed in quotes ("")

//let firstName = Ebere;   //global scope
let someOne = {
    firstName : "John",
    lastName : "Doe",
    id : 5566,
    fullName: function() {         //function assigned to a property in an object is known as a method
        return this.firstName + ' ' + this.lastName   //local scope precedence over global..does not necessarily work with object properties
        }
}

console.log(someOne.firstName);
console.log(someOne.id);

// let secondName = new string();   //another way of declaring an object; not advisable. new creates a new instance
// let ageUs = new Number();

let dogName = 'Rotweiller dog';
console.log(dogName.length);
console.log(dogName.split(" "));
console.log(dogName[2]);
console.log(dogName.charAt[1]);   
console.log(dogName.substr(0));  //no (0) did not wipe off any letter
console.log(dogName.substr(1,3));  //the first no wipes off letters from the string; second(no) prints the remaining letters
console.log(dogName.substring(3));  //only produces the index
console.log(dogName.substring(3,6)); //index first, then length
let mine = "this is my love eternal";
console.log(mine.split());
console.log(mine.split( ' ').splice(2,4));
//console.log(mine.splice(4,1));
mineYo = []
mineYo = mine.split(' ').slice(0,2); // to achieve only 'this is love eternal'; i split, then splice out 'this is'
console.log(mineYo);
mineYo = [...mineYo, ...mine.split( ' ').slice(3,6)]; //then i join (..)with the splitted and spliced 'love eternal'
// console.log(mineYo);
mineYo = mineYo.toString().replace(',',' ').replace(',',' ').replace(',',' '); //use 'replace' to exchange ',' with 'space'
//mineYo = mineYo.join();
mineYo = mineYo.toString().replace(/,/g, ' ');
console.log(mineYo);
mine = mine.split(' ').reverse(); //did not work

let str = "Holla people";
var strin = str.substring(2,5);  //starts with index, and ends with index. results in 'lla'
console.log(strin);
var strin = str.substr(2,5); //starts with index, and ends with length of extracted part from the given index. results in 'lla p'
console.log(strin);

const arri = [1, 2, 3, 4, 5];
console.log(arri[3]);

const stri = "123";
var conv = (Number(stri)); 
console.log(stri, " ", conv);
console.log(typeof(stri, " ", conv));

var color = ["white", "black", "blue", "yellow", "red"];
yes = color.length;
for(let i=0; i<yes; i++) {
    color[i] += " is a color." 
    console.log(color[i])
}

const arra = [1,2,3,4,5];

for (let i=0; i<arra.length; i++) {
    console.log(arra[i] * 5);
    console.log(arra[i] += " is a number");
    if (arra[i] % 2 === 0) {
        console.log (arra[i] += " is even");
    }

    else{
        console.log (arra[i] += " is odd");
    }
}

const arr = [1,2,3,4,5];

for (let i=0; i<arr.length; i++) {
    console.log(arr[i] * 5);
    console.log(arr[i] += " is a number");
    if (arr[i] % 2 === 0) {
        console.log (arr[i] += " is esz666666666666666666666666666666663weven");
    }

}


const many = [3,5,4,7,12,24,15,20,18,21];

for (let i=0; i<many.length; i++){
    if(many[i] % 2 === 1){
        console.log(many[i]  += " is odd");
    }
    else{
        console.log(many[i] += " is even")   
     }
}

var numbers = [45, 4, 9, 16, 25];

numbers.forEach(function(value, index){   //eS5 forEach
    console.log(value * 5);
})

numbers.forEach((value)=>{
    console.log((value) * 6);
})

numbers.forEach(value=>console.log);
