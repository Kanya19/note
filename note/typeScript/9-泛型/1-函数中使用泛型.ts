// 泛型   函数中的泛型  泛型常用T
function join<T,P>(first:T,second:P){
    return `${first}${second}`
}
join<string,number>("jsZzx",1);// 泛型可以写一个，也可以写两个
join(1,2);// 不写泛型也可以，会进行类型推断判断类型，但是不推荐

// 泛型中数组的使用
function myFun<T>(params:T[]){ // 泛型数组的写法 T[],Arry<T>
    return params;
}
myFun<string>(["123","456"])