var n1: number = 5;

var n2: number = n1--;

console.log(n1, n2);

// 位运算符    
{
    let a: number = 3;   // 二进制 10 
    let b: number = 2;   // 二进制 11
    var result;
    result = (a & b);
    // 位与操作，都为1时为1，a为0011，b为0010，所以第四位都为0，第三位都为0，第二位都为1，第一位一个0一个1，所以为0，所以result为0010，为2
    console.log("(a & b) => ", result)

    result = (a | b);
    // 位与操作，任意为1时为1，a为0011，b为0010，所以第四位都为0，第三位都为0，第二位都为1，第一位一个0一个1，所以为1，所以result为0011，为3
    console.log("(a | b) => ", result)

    result = (a ^ b);
    // 位异或操作，不同为1，相同为0，a为0011，b为0010，所以第四位都为0，第三位都为0，第二位都为0，第一位一个0一个1，所以为1，所以result为0001，为1
    console.log("(a ^ b) => ", result);

    result = (~b);
    // （取反）逻辑反操作，0为1，1为0，b为0010，所以第四位都为1，第三位都为1，第二位都为0，第一位为1，为6
    console.log("(~b) => ", result);

    result = (a << b);
    console.log("(a << b) => ", result);

    result = (a >> b);
    console.log("(a >> b) => ", result);

    result = (a >>> 1);
    console.log("(a >>> 1) => ", result);
}
