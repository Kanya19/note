// 任意类型	any	声明为 any 的变量可以赋予任意类型的值。
var zzx: any;

// 数字类型number  双精度 64 位浮点值。它可以用来表示整数和分数。
let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744;    // 八进制
let decLiteral: number = 6;    // 十进制
let hexLiteral: number = 0xf00d;    // 十六进制

// 字符串类型string  一个字符系列，使用单引号（'）或双引号（"）来表示字符串类型。反引号（`）来定义多行文本和内嵌表达式。
let zname: string = "Runoob";
let years: number = 5;
let words: string = `您好，今年是 ${zname} 发布 ${years + 1} 周年`;

// 布尔类型	boolean	  表示逻辑值：true 和 false。
let flag: boolean = true;

// 数组类型	无	声明变量为数组。
// 在元素类型后面加上[]
let arr1: number[] = [1, 2];

// 或者使用数组泛型
let arr2: Array<number | String | Function> = [1, 2, "hello", (): String => {
    return "hello"
}];

// 元组	无	元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。
let x: [string, number];
x = ['Runoob', 1];    // 运行正常
// x = [1, 'Runoob'];    // 报错
// console.log(x[0]);    // 输出 Runoob

// 枚举	enum	枚举类型用于定义数值集合。
enum Color { Red = 1, Green = 3, Blue = 5 };
let c: Color = Color.Blue;
console.log(c);    // 输出 2
console.log(Color);

// void	void	用于标识方法返回值的类型，表示该方法没有返回值。
function hello(): void {
    console.log("Hello Runoob");
}
// hello();

// null	nul  表示对象值缺失。undefined undefined 没有设置值的变量
let a: undefined
// console.log(typeof a);

// never 类型
let xx: never;
let yy: number;

// 运行错误，数字类型不能转为 never 类型
// xx = 123;

// 运行正确，never 类型可以赋值给 never类型
// xx = (()=>{ throw new Error('exception')})();
// 因为会报错（error本身就是为了报错的的所以正常）

// 运行正确，never 类型可以赋值给 数字类型
// yy = (()=>{ throw new Error('exception')})();
// 因为会报错（error本身就是为了报错的的所以正常）

// 返回值为 never 的函数可以是抛出异常的情况
function error(message: string): never {
    throw new Error(message);
}

// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop(): never {
    while (true) {
        ;
    }
}
// error("1");
// loop()

// 类型断言（Type Assertion）
var str = 1
var str2: string = <any>str //str、str2 是 string 类型
console.log(str2)

// 类型推断  如果由于缺乏声明而不能推断出类型，那么它的类型被视作默认的动态 any 类型
var num = 2;    // 类型推断为 number
// console.log("num 变量的值为 "+num); 
// num = "12";    // 编译错误
// console.log(num);

var global_num = 12          // 全局变量
class Numbers {
    num_val = 13;
    num: Number;         // 实例变量
    static sval = 10;         // 静态变量
    constructor(num: Number) {
        this.num = num
    }
    storeNum(): void {
        var local_num = 14;    // 局部变量
    }
}


console.log("全局变量为: " + global_num)
console.log(Numbers.sval)   // 静态变量
var obj1 = new Numbers(2);
// console.log(local_num);//报错

console.log("实例变量: " + obj1.num_val)