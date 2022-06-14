console.log("%cAssignements of videos  from 23 up to 26: ","color: blue; font-size:28px");

//task 1
console.log("%cPart 1: ","color: red; font-size:25px");
//printing 100000 in 13 differnet ways "syntactic sugar":
console.log('1st way:', 100_000);
console.log('2nd way:',10e4);
console.log('3rdt way:',Math.pow(10,5));
console.log('4th way:',10**5);
console.log('5th way:',10*10*10*10*10);
console.log('6th way:',2000*50);
console.log('7th way:',500000/5);
console.log('8th way:',10*1/0.0001);
console.log('9th way:',100000*1);
console.log('10th way:',Math.pow(10,(2.5*2)));
//task 2
console.log("%cPart 2: ","color: red; font-size:25px");
console.log((Number.MIN_SAFE_INTEGER)*-1);
//task 3
console.log("%cPart 3: ","color: red; font-size:25px");
console.log(String(Number.MAX_SAFE_INTEGER).replace('.', '').length);
console.log(String(Number.MAX_SAFE_INTEGER).length);
//task 4
console.log("%cPart 4: ","color: red; font-size:25px");
let myVar = "100.56789 Views";
console.log(parseInt(myVar))
console.log(+parseFloat(myVar).toFixed(2));
console.log("%cPart 5: ","color: red; font-size:25px");
//task 5:
let num=10;
let result=+Number.isInteger(num);
console.log(++result);
console.log("%cPart 6: ","color: red; font-size:25px");
//task 6:
let flt=10.4;
console.log(Math.trunc(flt))
console.log(Math.floor(flt))
console.log(Math.round(flt))
let flt1=Math.ceil(flt);
console.log(--flt1)
console.log(parseInt(flt))

console.log("%cPart 7: ","color: red; font-size:25px");
//task 7:
console.log("Here is a random integer between '0' and  '4':\n",Math.floor(Math.random()*5))
console.log("%cAssignements of videos from 27 up to 30: ","color: blue; font-size:28px");
//task 1:
console.log("%cPart 1: ","color: red; font-size:25px");
let userName="Elzero";
console.log(userName.toLowerCase(userName).charAt(0));
console.log(userName.toLowerCase(userName)[0]);
console.log(userName.toLowerCase(userName)[0].repeat(3));
console.log(userName.charAt(userName.toLowerCase(userName).lastIndexOf("e")));
console.log(userName.charAt(userName.toLowerCase(userName).indexOf("e",1)));
//task 2
console.log("%cPart 2: ","color: red; font-size:25px");
let word="Elzero",
letterZ="z",
letterE="e",
letterO="O";
console.log(word.indexOf(letterZ)!=-1);
console.log(word.charAt(0)==letterE.toUpperCase(letterE));
console.log(word.charAt(word.length-1)=="o");
console.log("%cThe challenge in vid 30: ","color: green; font-size:28px");

let a=100,
b=2_00.5,
c=1e2,
d=2.4;
console.log(parseInt(Math.min(a,b,c,d)))
console.log((Math.floor(d))*5*a);
console.log("__________________");
console.log(a/50)
console.log(Number(String(b).charAt(0)));
console.log(c/50);
console.log(parseInt(d))
console.log("__________________");

console.log(Number((b/(d+0.6074)).toFixed(2)))
console.log(Math.round((b/(d+0.6074))))
console.log("%cAssignments of videos from 31 up to 32: ","color: blue; font-size:28px");
console.log("%cPart 1: ","color: red; font-size:25px");
console.log(100 == "100"); // true
console.log(100<1000);
console.log(110>100 || 10<20);
console.log(-10 == "-10")
console.log(!-50 >= "-40")
console.log(!10 !=-"-40)")
console.log(!"10"!= 10)
console.log(!20==false)
console.log("%cPart 2: ","color: red; font-size:25px");
let num1=10, num2=20;
console.log(num1<num2);
console.log(num1<=num2);
console.log(!(num1==num2));
console.log(!num1===!num2);
console.log(!num1<num2);
console.log(num1>!num2);
console.log(!(!num1===num2));
console.log(!(num1===num2));
console.log(!(num1>num2));
console.log("%cPart 3: ","color: red; font-size:25px");
let 
a1=20,
b1=30,
c1=10;
console.log(a1<b1 && a1>c1 ||a1>b1);
console.log(a1 < b1 || a1 < c1);
console.log(!(a1>b1) && (a1 < b1) && !(a1 < c1) && !(a1 == c1));




