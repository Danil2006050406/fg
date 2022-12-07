let x=prompt("Перше число");
let y=prompt("Друге  число");
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
let a = prompt("Перше числове значення");
console.log("Перше числове значення", a);
let b = prompt("Друге числове значення");
console.log("Друге числове значення", b);
let truevalue=true;
let falsevalue=false;
if (a<20){
    console.log(" Перше число", a ," < 20",falsevalue);
}
if (a>=20){
    console.log(" Перше число", a ," > 20",truevalue);
}
    if (b<30){
        console.log(" Друге число ", b ," < 30",falsevalue);
    }
    if (b>=30){
        console.log(" Друге число ", b ," > 30",truevalue);
    }
    if(a<20 && b>=30){
        console.log(falsevalue);
    }
    if(a>=20 && b<30){
        console.log(falsevalue);
    }
    if(a>=20 && b>=30){
        console.log("All fine",truevalue);
    }