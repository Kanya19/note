// function getServe(status: any) {
//     if (status === Status.message) {
//         return Status.message
//     } else {
//         return 1
//     }
// }
// const Status = {
//     message: 0,
//     spa: 1,
//     dabaojian: 2
// }
// const resultSeve = getServe(0)
// console.log(resultSeve);

// 枚举方式的写法
enum Status{
    MASSAGE=1 // 可以修改enum中的初始值，本来初始值为 0 现在初始值为 1
    ,SPA
    ,DABAOJIAN
}
function setServe(status:any){
    if(status === Status.MASSAGE){
        return Status[status]
    }else if(status === Status.SPA){
        return Status[status]
    }else if(status === Status.DABAOJIAN){
        return Status[status]
    }
}
console.log("我要去"+setServe(2));

console.log(Status.DABAOJIAN);
console.log(Status[3]);


