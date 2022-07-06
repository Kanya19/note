interface Phone{
    driver:boolean
    call:()=>{}
}
interface Car{
    driver:boolean
    go:()=>{}
}

function judgeWho(obj:Phone|Car){
    // 类型保护方法
    // 1、类型断言
    // if (obj.driver) {
    //     (obj as Car).go() // 断言的方式，最常用的方式
    // }else{
    //     (obj as Phone).call()
    // }

    // 2、用in的方法进行断言
    // if("call" in obj){
    //     obj.call();
    // }else if ("go" in obj){
    //     obj.go();
    // }


}

function add(first:number|string,second:number|string){
    // return first+second; //直接相加不行
    if(typeof first === "string"||typeof second === "string"){
        return `${first}+${second}`;
    }else{
        return first+second;
    }
}

// instanceof 使用方法  只能使用在类上
class NumberObj{
    count:number = 1;
}
function addObj(first:Object|NumberObj,second:Object|NumberObj){
    if (first instanceof NumberObj&&second instanceof NumberObj) {
        return first.count+second.count
    }
    return 0;
}