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