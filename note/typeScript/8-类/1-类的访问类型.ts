class Person {
    [propname:string]:any
    protected sayHello(): void {
        this.name&&console.log(this.name);
        console.log("hello ts");
    };
}

class Teacher extends Person{
    constructor(){
        super()
    }
    say(){
        this.sayHello();
    }
}
const person = new Teacher()
person.name = "kanya"
person.say();
console.log(person.name);