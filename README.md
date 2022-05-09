# Javascript

- JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn.
- Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers. JavaScript is so popular that it's the most used programming language in the world, used as a client-side programming language by 97.0% of all websites.

# Node Js:

    • Open source server environment
    • It is a platform in which runs Javascript on server side
    • Runs on various platforms(Windows, Linux, Unix, Mac OS X etc)
    • It has built-in librabries to handle web request and web responses


# Node Js Installation:

    • Download Node Js installer
    • Then install Node Js
    • Verify installation by using command prompt by entering node -v

# Comment your Javascript code

- In-line comment
- Multi-line comment

## Example

```Javascript
var a=5; // In-line comment

/* var a=5;
dsk
dhj
ch
Multi-line comment */
```

# Datatypes

- A data type is a classification of data which tells the compiler or interpreter how the programmer intends to use the data.
- undefined - hasn't been defined
- null- nothing
- boolean - true or false
- string - sequence of character
- symbol - immutable primitive value that is unique
- number - number
- object - can store lot of different key value pairs

# Variables

- Variable allows computers to store and manipulate data in a dynamic fashion

## Example

```Javascript
var a=5;

let myName="Ram";

const pi=3.14;
```

## Difference Between Let, Var and Const?

## var

- The scope of a var variable is functional scope.
- It can be updated and re-declared into the scope.
- It can be declared without initialization.
- It can be accessed without initialization as its default value is “undefined”.

## let

- The scope of a let variable is block scope.
- It can be updated but cannot be re-declared into the scope.
- It can be declared without initialization.
- It cannot be accessed without initialization, as it returns an error.

## const

- The scope of a const variable is block scope.
- It cannot be updated or re-declared into the scope.
- It cannot be declared without initialization.
- It cannot be accessed without initialization, as it cannot be declared without initialization.

## Storing Values with assignment operator

## Example

```Javascript
var a;
var b=2;
console.log(a);
console.log(b);
a=7;
console.log(a);
b=a;
console.log(b);
```

## Output

- undefined
- 2
- 7
- 7

## Initializing Variables with assignment operator

## Example

```Javascript
var a=4;
var b=2;
var c="I am "

a=a+3;
b=b+8;
c=c+ "Ram";
console.log(a);
console.log(b);
console.log(c);
```

## Output

- 7
- 10
- I am Ram

## Case Sensitivity in Variables

## Example

```Javascript
var myName;
var ourName;
var yourName;

myName=4;
ourName="company";
yourName="Ram";


console.log(myName);
console.log(ourName);
console.log(yourName);
```

## Output

- 4
- company
- Ram

## Adding,Subtracting,Multiplying,Dividing and Remainder two numbers

## Example

```Javascript
var sum=10+5;
var sub=10-5;
var mul=8*6;
var div=6/4;
var rem=5%3;
console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);
console.log(rem);
```

## Output

- 15
- 5
- 48
- 1.5
- 2

### we can also do decimals

## Example

```Javascript
var sum=10.6+5.9;
var sub=10.6-5.3;
var mul=8.5*6.8;
var div=6.008/4.7;
var rem=5.5%3;
console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);
console.log(rem);
```

## Output

- 16.5
- 5.3
- 57.8
- 1.2782978723404255
- 2.5

## Increment,Decrement and Augmented Math operation

## Example

```Javascript
var sum=5;
var sub=10;
var mul=45;
var div=55;
// increment and decrement
//sum=sum+1;
//sub=sub-1;
//or
//sum++;
//sub--;

//Augmented math operations
sum+=1;
sub-=3;
mul*=5;
div/=5;

console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);
```

## Output

- 6
- 7
- 225
- 11

# Declaring String Variables

## Example

```Javascript
var a="RAM";
var c="CALM"

console.log(a);
console.log(c);
```

## Output

- RAM
- CALM

## Escaping literal quotes in strings

## Example

```Javascript
var myStr="I am a \"double quoted\" string with \"double quotes\"";
console.log(myStr);
```

## Output

- I am a "double quoted" string with "double quotes"

## Quoting string with single quotes

## Example

```Javascript
var myStr='<a href=\"http://www.example.com\" target=\"_blank\">Link</a>';
console.log(myStr);
```

## Output

- <a href="http://www.example.com" target="_blank">Link</a>

## Escape Sequence

## Example

```Javascript
var myStr="firstline\n\tsecondline\nthirdline";
console.log(myStr);
```

## Output

- firstline
-         secondline
- thirdline

# Concatenating Strings

## Example

```Javascript
// var myStr="He is doing better" + " and better";
// console.log(myStr);

// var myStr="He is doing better";
// myStr+=" and better";
// console.log(myStr);

// var myName=" and";
// var ourName="He is doing better"+ myName+" better"
// console.log(ourName);

var myName="He is doing better";
var ourName=" and better"
myName+=ourName;
console.log(myName);
```

## Output

- He is doing better and better

## string length,first string,last string,nth string

## Example

```Javascript
var myStr="Ram Kumar"
myStr=myStr.length;
console.log(myStr);
// bracket notation
var lastName="Ram Kumar";
firstName=lastName[5];
console.log(firstName);
//string immutability
var str="jello world"
str="Hello World"
console.log(str);
//find the nth string
var lastName="Ram Kumar";
firstName=lastName[5];
console.log(firstName);
//find the last string
var lastName="Ram Kumar";
firstName=lastName[lastName.length-1];
console.log(firstName);
//nth word
var lastName="Ram Kumar";
middleName=lastName[lastName.length-3];
console.log(middleName);
```

## Output

- 9
- u
- Hello World
- u
- r
- m

# Word Blanks

## Example

```Javascript
function wordBlanks(myNoun,myAdjective,myVerb,myAdverb){
    var result="The "+myAdjective+" "+myNoun+" "+myVerb+" to the store "+myAdverb;
    return result;
}
console.log(wordBlanks("dog","big","ran","quickly"));
console.log(wordBlanks("bike","slow","flew","slowly"));
```

## Output

- The big dog ran to the store quickly
- The slow bike flew to the store slowly

# Arrays

- Arrays allow you to store several pieces of data in one place

## Example

```Javascript
var ourArray=["Ram",24];
console.log(ourArray);

//nested arrays
var ourArray=[["black",6],["white",89]];
console.log(ourArray);

//access array data
var ourArray=[13,45,65];
var ourData=ourArray[1];
console.log(ourData);

//modify array data
var ourArray=[13,45,65];
ourArray[2]=80;
console.log(ourArray);

//access multi-dimensional array
var ourArray=[[1,2,3],[4,5,6],[7,8,9],[[12,34,56],898,98]];
var ourData=ourArray[3][2];
console.log(ourData);
```

## Output

- [ 'Ram', 24 ]
- [ [ 'black', 6 ], [ 'white', 89 ] ]
- 45
- [ 13, 45, 80 ]
- 98

# push(),pop(),shift() and unshift():

## Example:

```Javascript
//push
var ourArray=["Ram",24];
ourArray.push("Kumar",78);
console.log(ourArray);

//pop
var ourArray=["Ram",24];
ourArray.pop("Kumar",78);
console.log(ourArray);

//shift
var ourArray=["Ram",24];
ourArray.shift("Kumar",78);
console.log(ourArray);

//unshift
var ourArray=["Ram",24];
ourArray.unshift("Kumar",78);
console.log(ourArray);
```

## Output

- [ 'Ram', 24, 'Kumar', 78 ]
- [ 'Ram' ]
- [ 24 ]
- [ 'Kumar', 78, 'Ram', 24 ]

## Reusable with function

## Example

```Javascript
function reusableFunction(){
    console.log("Hi hello")
}
reusableFunction();
```

## Output

- Hi hello

# Function with arguments

## Example

```Javascript
function functionwitharg(a,b){
    console.log(a*b);
}
functionwitharg(3,5);
```

## Output

- 15

# Global Scope

- Any variable that’s not inside any function or block (a pair of curly braces), is inside the global scope. The variables in global scope can be accessed from anywhere in the program.

## Example

```Javascript
var myGlobal=10;
function fun1(){
    oopsGlobal=5;
}
function fun2(){
    var output;

    if( typeof myGlobal!="undefined"){
        output="myGlobal:"+myGlobal;
    }
    console.log(output);
    if(typeof oopsGlobal!="undefined"){
        output="oopsGlobal:"+oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();
```

## Output

- myGlobal:10
- oopsGlobal:5

# Local scope

- Variables declared inside a function is inside the local scope. They can only be accessed from within that function, that means they can’t be accessed from the outside code.

## Example

```Javascript
function fun1(){
    var a=90;
    console.log(a);
}
fun1();
```

## Output

- 90

# Return a value from a function

## Example

```Javascript
function fun1(num){
return num-8;

}
console.log(fun1(18));
```

## Output

- 10

# Assignment with returned value

## Example

```Javascript
var fun2=0;
function fun1(num){
return num*8/2;

}
fun2=fun1(4);
console.log(fun2);
```

## Output

- 16

# Stand in Line

## Example

```Javascript
function fun(arr,item){
    arr.push(item);
    return arr.shift();

}
var testarr=[1,2,3,4,5,6];
console.log("Before: "+JSON.stringify(testarr));
console.log(fun(testarr,6));
console.log("After: "+JSON.stringify(testarr));
```

## Output

- Before: [1,2,3,4,5,6]
- 1
- After: [2,3,4,5,6,6]

# JSON.stringify()

- A common use of JSON is to exchange data to/from a web server.

- When sending data to a web server, the data has to be a string.

- Convert a JavaScript object into a string with JSON.stringify().

# If Statement

## Example

```Javascript
var ram;
function fun(ram){
    if(ram){
        return "yes I am Ram";
    }
    return "No Its not me";
}
console.log(fun(true));
console.log(fun(false));
```

## Output

- yes I am Ram
- No Its not me

# Equality Operator

## Example

```Javascript
// Equality operator
var a;
function equal(a){
    if(a==7){
    return "equal";
}
return "not equal";
}
console.log(equal(6));

// Strict equality operator
function strictEqual(a){
    if(a===7){
    return "equal";
}
return "not equal";
}
console.log(strictEqual(7));

//Strict
function strictEqual1(a){
    if(a===7){
    return "equal";
}
return "not equal";
}
console.log(strictEqual('7'));

// inequality operator
function inEqual(a){
    if(a!=7){
    return "equal";
}
return "not equal";
}
console.log(inEqual(8));

//Strict inequality operator
function strictInEqual(a){
    if(a!==7){
    return "equal";
}
return "not equal";
}
console.log(strictInEqual(8));

//greater than or equal to

function greater(a){
    if(a>=7){
    return "a is big";
}
if(a>5){
    return "a is small"
}
return "not equal";
}
console.log(greater(8));

//less than or not
function less(a){
    if(a<=3){
    return "a is big";
}
if(a<=9){
    return "a is small"
}
return "not equal";
}
console.log(less(9));
```

## Output

- not equal
- equal
- not equal
- equal
- equal
- a is big
- a is small

# And / OR operator

## Example

```Javascript
//And
function andOp(a){
    if(a>6 && a<=10){
        return "yes";
    }
    return "no";
}
console.log(andOp(12));

//OR
function orOp(b){
    if(b<18 || b>10){
        return "yes";
    }
    return "no";
}
console.log(orOp(25));
```

## Output

- no
- yes

# If Else Statement

## Example

```Javascript

function ifElse(a){
    var result="";
    if(a>5){
        result= "a is big";
    }else{
        result="a is small";
    }
    return result;
}
console.log(ifElse(4));
```

## Output

- a is small

# Else If Statement

## Example

```Javascript

function elseIf(a){
    var result="";
    if(a>8){
        result= "a is greater";
    }else if(a<5){
        result="a is smaller";
    }else{
        result="in between " ;
    }
    return result;
}
console.log(elseIf(7));
```

## Output

- in between

# Golfcode

## Example

```Javascript
var names=["ram","sam","regin","suresh","ravi","mani","logan"];
function golfCode(par,strokes){
    if(strokes==1){
        return names[0];
    }
    else if(strokes<=par-2){
        return names[1];
        }
        else if(strokes==par-1){
            return names[2];
            }
            else if(strokes==par){
                return names[3];
                }
                else if(strokes==par+1){
                    return names[4];
                    }
                    else if(strokes==par+2){
                        return names[5];
                        }
                        else if(strokes>=par+3){
                            return names[6];
                            }
}
console.log(golfCode(4,4));
console.log(golfCode(5,4));
console.log(golfCode(2,9));
console.log(golfCode(13,14));
```

## Output

- suresh
- regin
- logan
- ravi

# Switch Statement

## Example

```Javascript
function switchCase(a){
    var result="";
    switch(a){
        case 1:
            result="alpha";
            break;
            case 2:
            result="beta";
            break;
            case 3:
            result="gamma";
            break;
            case 4:
            result="alpha1";
            break;
    }
    return result;

}
console.log(switchCase(2));

//Example2
function switchCase1(a){
    var result="";
    switch(a){
        case "a":
            result="apple";
            break;
            case "b":
            result="orange";
            break;
            case "c":
            result="pineapple";
            break;
            case "d":
            result="lemon";
            break;
            default:
                result="stuff"
    }
    return result;

}
console.log(switchCase1("b"));
console.log(switchCase1("t"));

//example 3
function switchCase3(a){
    var result="";
    switch(a){
        case 1:
            case 2:
                case 3:
            result="cow";
            break;
            case 4:
                case 5:
                    case 6:
            result="dog";
            break;
            case 7:
                case 8:
                    case 9:
            result="birds";
            break;
            default:
                result="insects";
                break;
    }
    return result;

}
console.log(switchCase3(7));
```

## Output

- beta
- orange
- stuff
- birds

# Count Cards

## Example

```Javascript
var count=0;
function cc(card){
switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        count++;
        break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
        count--;
        break;

}
var holdbet='Hold';
if(count>0){
    holdbet='Bet'
}
return count +" " + holdbet;
}
//cc(2);cc('K');cc(10);cc('K');cc('A');
console.log(cc('Q'));
```

## Output

- -1 Hold

# Build Objects

## Example

```Javascript
var myDog={
    "name":"dfgjh",
    "legs":4,
    "tails":2,
    "friends":["everything"]

};
myDog['bark']="woof"
console.log(myDog.legs);
console.log(myDog);
console.log(myDog['tails']);
```

## Output

- 4
- {
- name: 'dfgjh',
- legs: 4,
- tails: 2,
- friends: [ 'everything' ],
- bark: 'woof'
- }
- 2

## Example 1

```Javascript
var objTest={
    name:"geetha",
    name1:"jessi",
    name2:"rathina"
};
objTest.name1="varsha";
console.log(objTest);
var read="name1";
var player=objTest[read];
console.log(player);
console.log(objTest["name2"]);
objTest.name3="Abi";
console.log(objTest);
delete objTest.name2;
console.log(objTest);
```

## Output

- { name: 'geetha', name1: 'varsha', name2: 'rathina' }
- varsha
- rathina
- { name: 'geetha', name1: 'varsha', name2: 'rathina', name3: 'Abi' }
- { name: 'geetha', name1: 'varsha', name3: 'Abi' }

## Example 3

```Javascript
function objLookup(val){
    var result="";
    var lookup={
    name:"geetha",
    name1:"jessi",
    name2:"rathina"
    };
    result= lookup[val];
    return result;
}
console.log(objLookup("name1"));
```

## Output

- jessi

# testing Objects for properties

## Example

```Javascript
var objTest={
    name:"geetha",
    name1:"jessi",
    name2:"rathina"
};
function checkObj(checkProp){
    if(objTest.hasOwnProperty(checkProp)){
        return objTest[checkProp];
    }else{
        return "Not Found"
    }
}
console.log(checkObj("name"));
```

## Output

- geetha

# Manipulating Complex Objects

## Example

```Javascript
var myDog=[{
    "name":"dfgjh",
    "legs":4,
    "tails":2,
    "friends":[
        "everything",
    "fhfk",
"asgacv"]

},{
name3:"geetha",
    name1:"jessi",
    name2:"rathina"
}];
console.log(myDog[0]["legs"]);
console.log(myDog[0]["friends"]);
```

## Output

- 4
- [ 'everything', 'fhfk', 'asgacv' ]

# While Loop

## Example

```Javascript
var myArr=[];
var i=0;
while(i<5){
    myArr.push(i);
    i++;
}
console.log(myArr);
```

## Output

- [ 0, 1, 2, 3, 4 ]

# For Loop

## Example

```Javascript
var myArr=[];

for(i=0;i<6;i++){
    myArr.push(i);

}
console.log(myArr);
```

## Output

- [ 0, 1, 2, 3, 4, 5 ]

## Example 1

```Javascript
// Even
var myArr=[];
for(i=0;i<10;i+=2){
    myArr.push(i);

}
console.log(myArr);
```

## Output

- [ 0, 2, 4, 6, 8 ]

## Example 2

```Javascript
//Odd
var myArr=[];
for(i=1;i<10;i+=2){
    myArr.push(i);

}
console.log(myArr);
```

## Output

- [ 1, 3, 5, 7, 9 ]

## Example 3

```Javascript
//Backward even
var myArr=[];
for(i=10;i>0;i-=2){
    myArr.push(i);

}
console.log(myArr);
```

## Output

- [ 10, 8, 6, 4, 2 ]

## Example 4

```Javascript
//Backward Odd
var myArr=[];
for(i=9;i>0;i-=2){
    myArr.push(i);

}
console.log(myArr);
```

## Output

- [ 9, 7, 5, 3, 1 ]

# Iterate For

## Example

```Javascript
var myArr=[2,3,4];
var total=0;
for(i=0;i<myArr.length;i++){
    total+=myArr[i]

}
console.log(total);
```

## Output

- 9

# Nested For

## Example

```Javascript
function nestedFor(arr){
    var product=1;
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr[i].length;j++){
            product *= arr[i][j];
        }
    }
    return product;
}
var product=nestedFor([[2,3],[4,5],[6,7,4]])
console.log(product);
```

## Output

- 20160

# Do While Loop

## Example

```Javascript
var myArr=[];
var i=10;
do{
    myArr.push(i);
    i++;
}while(i<5)
console.log(i,myArr);
```

## Output

- 11[10]

# Profile Lookup

## Example

```Javascript
var contacts=[
    {
        "firstname":"sgdjdg",
        "lastname":"sEARX",
        "NUMBER":"4235365"
    },
    {
        "firstname":"ram",
        "lastname":"kumar",
        "NUMBER":"4233726365"
    },
    {
        "firstname":"sasi",
        "lastname":"ram",
        "NUMBER":"4235393865"
    },
    {
        "firstname":"tilak",
        "lastname":"varma",
        "NUMBER":"42353234623768465"
    },

]
function lookupProfile(name,prop){
    for(i=0;i<contacts.length;i++){
        if(contacts[i].firstname===name){
            return contacts[i][prop];
        }

    }
    return "no such contact";
}
var data=lookupProfile("ram","NUMBER");
console.log(data);
```

## Output

- 4233726365

# Random

## Example

```Javascript
//decimal
function random(){
    return Math.random();
}
console.log(random());

//whole
function random1(){
    return Math.floor(Math.random()*20);
}
console.log(random1());
```

## Output 1

- 0.3234753070052221
- 13

## Output 2

- 0.6225690951918728
- 1

## Output 3

- 0.3252695854889598
- 10

# Random Range

## Example

```Javascript
function myRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
console.log(myRandom(90,1));
```

## Output1

- 46

## Output1

- 3

## Output1

- 73

# parseInt Function

- It takes a string and returns integer

## Example

```Javascript
function parseInte(str){
    return parseInt(str);
}
console.log(parseInte("1101"));
```

## Output

- 1101

# parseInt Radix

## Example

```Javascript
function par(a){
    console.log(parseInt(a,2));
    console.log(parseInt(a,8));
    console.log(parseInt(a,10));
    console.log(parseInt(a,16));
}
par("80");
par("1001");
```

## Output

- NaN
- NaN
- 80
- 128
- 9
- 513
- 1001
- 4097

# Ternary Operator

## Example

```Javascript
function ter(a,b){
    return a==b ? "true":"false";
}
console.log(ter(1,1));

//multiple ternary
function ter1(c){
    return c>0 ? "positive":c<0?"negative":"zero";
}
console.log(ter1(0));
```

## Output

- true
- zero

# Prevent Object mutation

## Example

```Javascript
function fun(){
    "use strict"
    const a={
        pi:3.14
    };
    try{
        a.pi=99;
    }catch(x){
        console.log(x);
    }
    return a.pi;
}
const pi=fun();
console.log(pi);
```

## Output

- 99
# Arrow Function #
## Example ##
```Javascript
// var magic=function(){
//     return new Date();
// };

const magic=()=>new Date();
console.log(magic());
```
## Output ##
* 2022-05-08T15:57:09.956Z

## Example 2 ##
```Javascript
//arrow with parameters
// var myConcat=function(a,b){
//     return a.concat(b);

// };

const myConcat=(a,b)=>a.concat(b);
console.log(myConcat([1,2],[3,4,5]));
```
## Output ##
* [ 1, 2, 3, 4, 5 ]
## Example 2 ##
```Javascript
const a=[4,5,8.5,-45,-98,6.9,34.9,40];
const square=(arr)=>{
    const squaredInteger=arr.filter(num = (temp) =>Number.isInteger(temp) && temp>0).map(x= (tem) => tem*tem);
    return squaredInteger;
};
const squaredInteger=square(a);
console.log(squaredInteger);
```
## Output ##
* [ 16, 25, 1600 ]

## Record Collection example ##
```Javascript
var collection={
    "45":{
        "album":"auhasas",
        "artist":"john",
        "tracks":["track 1","track 2"]
    },
    "46":{
        "album":"ertyu",
        "artist":"jebaraj",
        "tracks":["track 3","track 4"]
    },
    "47":{
        "album":"xcvb",
        "artist":"rohit",
        "tracks":[]
    },
};
var collectionCopy=JSON.parse(JSON.stringify(collection));
function updateRecords(id,prop,value){
    if(value===""){
        delete collection[id][prop];
    }else if(prop==="tracks"){
    collection[id][prop]=collection[id][prop] || [];
    collection[id][prop].push(value);
    }
    else{
        collection[id][prop]=value;
    }
    return collection;


}
console.log(updateRecords(45,"artist","hana"));
console.log(updateRecords(47,"tracks","ranjith"));
console.log(updateRecords(46,"artist",""));
```
## Output ##
* {
*   '45': {
*     album: 'auhasas',
*     artist: 'hana',
*     tracks: [ 'track 1', 'track 2' ]
*   },
*   '46': {
*     album: 'ertyu',
*     artist: 'jebaraj',
*     tracks: [ 'track 3', 'track 4' ]
*   },
*   '47': { album: 'xcvb', artist: 'rohit', tracks: [] }
* }
* {
*   '45': {
*     album: 'auhasas',
*     artist: 'hana',
*     tracks: [ 'track 1', 'track 2' ]
*   },
*   '46': {
*     album: 'ertyu',
*     artist: 'jebaraj',
*     tracks: [ 'track 3', 'track 4' ]
*   },
*   '47': { album: 'xcvb', artist: 'rohit', tracks: [ 'ranjith' ] }
* }
* {
*   '45': {
*     album: 'auhasas',
*     artist: 'hana',
*     tracks: [ 'track 1', 'track 2' ]
*   },
*   '46': { album: 'ertyu', tracks: [ 'track 3', 'track 4' ] },
*   '47': { album: 'xcvb', artist: 'rohit', tracks: [ 'ranjith' ] }
* }
# Destructing assignment to assign variables from objects #
## Example ##
```Javascript
const AVG_TEMP={
    today:77.5,
    tomorrow:79
};
function getTemOfTmrw(avgTemp){
    "use strict";
    const{tomorrow:tempOfTomorrow}=avgTemp;
    return tempOfTomorrow;
}
console.log(getTemOfTmrw(AVG_TEMP));
```
## Output ##
* 79
## Example 2 ##
```Javascript
//with nested object
const AVG_TEMP={
    today:{min:77.5,max:83},
    tomorrow:{min:79,max:84.9}
};
function getTemOfTmrw(avgTemp){
    "use strict";
    const{tomorrow:{max:tempOfTomorrow}}=avgTemp;
    return tempOfTomorrow;
}
console.log(getTemOfTmrw(AVG_TEMP));
```
## Output ##
* 84.9
## Example ##
```Javascript
//with rest operators
const source=[1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){
    const[ , , ...arr]=list;
    return arr;
}
const arr=removeFirstTwo(source);
console.log(arr);
console.log(source);
```
## Output ##
* [
*   3, 4, 5,  6,
*   7, 8, 9, 10
* ]
* [
*   1, 2, 3, 4,  5,
*   6, 7, 8, 9, 10
* ]
# pass an object as a function's parameter #
## Example ##
```Javascript
const stats={
max:56.89,
standard:5.89,
median:45.09,
mode:23.87,
min:-0.56
};
const half=(function(){
    return function half({max,min}){
        return (max+min)/2.0;
    }
})();
console.log(stats);
console.log(half(stats));
```
## Output ##
* { max: 56.89, standard: 5.89, median: 45.09, mode: 23.87, min: -0.56 }
* 28.165
# create strings using template literals #
## Example ##
```Javascript
const person={
    name:"ram",
    age:23
};
const greeting=`Hello my name is ${person.namw}!
I am ${person.age} years old`;
console.log(greeting);
```
## output ##
* Hello my name is undefined!
* I am 23 years old

## EXample ##
```Javascript
const bicycle={
    gear:2,
    setGear(newGear){
        "use Strict";
        this.gear=newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);
```
## output ##
* 3
# Getterrs and setters #
## Example ##
```Javascript
function makeClass(){
    class Thermostat{
        constructor(temp){
            this._temp=5/9*(temp-32);

        }
        get temperature(){
            return this._temp;

        }
        set temperature(updatedTemp){this._temp-=updatedTemp;}
    }
    return Thermostat;
}
const Thermostat=makeClass();
const thermos=new Thermostat(76);
let temp=thermos.temperature;
thermos.temperature=26;
temp=thermos.temperature;
console.log(temp);
```
## Output ##
* -1.5555555555555536

# Recursion #
* it is a programming pattern that helps in situation where a task can be naturally split into several tasks of the same kind but simpler

## Example ##
```Javascript
function pow(x,n){
    if(n==1){
        return x;

    }
    else{
        return x*pow(x,n-1);
    }
}
console.log(pow(2,4));
```
## Output ##
* 16

# Closure #
* a closure is a functio that remembers its outer variables and can access them.
* function + environment = closure

## Example ##
```Javascript
var add=(function(){
    var counter=0;
    return function(){
        counter+=1;
        return counter;
    }
})();
add();
add();
console.log(add());
```
## Output ##
* 3

# new Function #
* the "new function" syntax is the another way to create a function

# Arrow Function #
* arroe functions are anonymous and change the way this binds in functions.It makes our code more concise and simplifies function scoping and this keyboard
* Arr.foeeach(func)
* setTimeout(func)

# Global Object #
* provides variables and functions that are available anywhere.By default those are build into the language or the environment

# setTimeout #
* allows us to run a function once after the interval of time
## Example ##
```Javascript
function sayHi(){
    console.log("hello");
}
setTimeout(sayHi,1000);
```
## Output ##
* hello

# setInterval #
* allows us to run a function repeatedly starting after the interval of time, then repeating continously at the interval
## Example ##
```Javascript
let timeId=setInterval(()=>console.log("tick"),2000);
setTimeout(()=>{clearInterval(timeId);console.log("stop");
},5000);
```
## Output ##
* tick
* tick
* stop

# Function Binding #
* when passing object methods as callbacks, for instance to setTimeout, there's a known problem of "losing this". Function provide a built-in method bind that allows fixing this
## Example ##
```Javascript
let user={
    firstName:"john"
};
function func(){
    console.log(this.firstName);
}
let funcUser=func.bind(user);
console.log(funcUser());
```
## Output ##
* john
* undefined

# Prototypes #
* In javascript, objects have a special hissen priperty known as prototype which depicts either null or references another object Now that the object is called prototype.
* prototypal inheritance
* prototype methods,objects without _Proto_

## Example ##
```Javascript
//prototypal inheritance
let pet={
    eats:true
};
let dog={
    jump:true
};
dog._Proto_=pet;
alert(dog.eats);
alert(dog.jump);
```
## Example 1 ##
```Javascript
//object.create(Prpto[,descriptors])
//Object.getPrototypeOf(obj)
//Object.setPrototypeOf(obj,proto)
let pet={
    eats:true
};
let dog=Object.create(pet);
alert(dog.eats);
alert(Object.getPrototypeOf(dog)===pet);
Object.setPrototypeOf(dog,{});
```

# Modules #
* a module is a self contained piece of code that groups semantically-related variables and functions
* modules are not built-in construct in javascript
* but the javascript module pattern provides a way to create modules that have well-defined interfaces that are exposed to clients of the module

## Example ##
```Javascript
var MODULE=(function(){
    var module={};
    var privateVariable=7;
    function privateMethod(){

    }
    module.moduleProperty=1;
    module.moduleMethod=function(){

    };
    return module;
}());
console.log(module);
```
# Chaining javascrip methods #
* javascript allows you to invoke multiple methods on an object ina single expression. To invoke multiple methods we have chaining.
* chaining is a process of stringing the method calls together with dots between them.
## Syntax ##
* Object.method().method1().method2();
## jquery selector ##
* $("#myDiv").removeClass("Off").addClass("On').css("background":"red");
## Example ##
account.number("3564527657").setBalance(150000).applyCredit(200);

# Generators #
* generators are a special class of functions that simplify the task of writing iterators.So this function produces
single value and generate a series of values.

# rest and spread #
## Example ##
```Javascript
function sum(...args){
    console.log(args);
}
sum(1,2,3);
```
## Output ##
* [ 1, 2, 3 ]
## Example 1 ##
```Javascript
function print(a,...args){
    console.log(a);
    console.log(args);
}
print(...[1,2,3,4,5]);
```
## Output ##
* 1
* [ 2, 3, 4, 5 ]

## Example 2 ##
```Javascript
function print(a,b,c,...args){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(args);
}
print(...[1,2,3],4,5,6);
```
## Output ##
* 1
* 2
* 3
* [ 4, 5, 6 ]
## Example 3 ##
```Javascript
function sum(...arguments){
    let sum = 0;
    for(let arg of arguments)
    sum += arg;
    return sum;
}
console.log(sum(1,2,3));
```
## Output ##
* 6
## Example 4 ##
```Javascript
let names=["kkr","rr"];
const cats=[...names,"dd"];
console.log(cats);
```
## Output ##
* [ 'kkr', 'rr', 'dd' ]