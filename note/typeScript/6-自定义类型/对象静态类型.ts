{
    const a: number = 1;
    const b: string = "Kanya";
    const wife: {
        uname: string,
        age: number
    } = {
        uname: "鬼头明里",
        age: 26
    }
    const wifes: string[] = ["鬼头明里", "安济知佳", "竹达彩奈"]

    class Person { }
    const dolly: Person = new Person()

    const marry: () => String = () => { // 必须是个函数并且返回值是字符串
        return "鬼头明里"
    }
    // 对象类型  基础对象类型  数组类型   类类型   函数类型
}