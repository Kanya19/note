// class Wife{
//     constructor(private _age:number){}
//     get age(){
//         return this._age
//     }
//     set age(age:number){
//         this._age = age+10
//     }
// }
// const dolly = new Wife(19);
// dolly.age = 19;
// console.log(dolly.age);

// static 静态类
{
    class Person {
        static sayHello() {
            return "hello kanya"
        }
    }
    // const girl = new Person()
    // static 的好处就是不需要new一个对象就可以调用构造函数中的方法
    console.log(Person.sayHello());

}