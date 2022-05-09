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