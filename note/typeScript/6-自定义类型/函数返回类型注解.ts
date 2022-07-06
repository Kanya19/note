// function getTotal(a: number, b: number):number { // 函数返回值类型为number
//     return a + b;
// } 
// {
//     const s = getTotal(1, 2);

// }
// function sayHello() :void{ // 返回值为void 即无返回值
//     console.log("Hello World!");
    
// }
// function errorFunction() : never{ // 返回值永远执行不完
//     throw new Error();
//     console.log("这是执行不到的东西");
    
// }
// function forNever() :never{
//     while(true){}
//     console.log("这也是执行不到的东西");
// }
// function add({one,two}:{one:number,two:number}){ //函数形参对象确定类型方法
//     return one+two
// }
// {
//     const total = add({one:1,two:2})
// }

function getNumber({one}:{one:number}){
    return one;
}   
{
    const one = getNumber({one:1})
}