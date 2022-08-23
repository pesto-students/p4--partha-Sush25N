// https://js-dk14ox.stackblitz.io


var Person = function() {};

Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function() {
    return this.name + ", " + this.age;
}

var Teacher = function() {};
Teacher.prototype = new Person();

Teacher.prototype.learn = function(subject) {
    console.log(this.name + " teach " + subject);
}

var him = new Teacher();

him.initialize("Adam", 45);
him.learn("Inheritance");