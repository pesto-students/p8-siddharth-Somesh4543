var Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};
var teacher = function () {
  this.teach = function (subject) {
    console.log(this.name + "is now teaching" + subject);
  };
};
teacher.prototype = new Person();
var him = new teacher();
him.initialize("Adam", 45);
him.teach("Inheritence");
