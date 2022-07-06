{
    // class Person{
    //     public readonly _name:string // 设置只读属性
    //     constructor(name:string){
    //         this._name = name
    //     }
    // }
    // const kanya = new Person("zzx");
    // // kanya._name = "kanya"; // 此时对于类中的属性无法进行修改
    // console.log(kanya._name);

    // 抽象类
    abstract class Girl{ // abstract 设置抽象类
        abstract name():any // 不知道为什么一定要设置成any
    }

    class Wife extends Girl{
        name(){
            // 名称虽说相同，但是业务逻辑不同
            console.log("鬼头明里");
        }
    }
    class GirlF extends Girl{
        name(){
            console.log("安济知佳");
        }
    }
    const dolly = new Wife()
    dolly.name();
}