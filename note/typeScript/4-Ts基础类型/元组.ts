{
    const wife: (string | number)[] = ["竹达彩奈", "w", 31];
    // 数组的缺陷，就是当数组内位置发生改变时无法判断下来（比如上述的"w",31两个改变位置的时候不会报错）
    // 这个时候我们就要用到元组   元组相对用的少
    const myWife: [string, string, number] = ["竹达彩奈", "w", 31]
    const myWifes: [string, string, number][] = [
        ["竹达彩奈", "w", 31],
        ["鬼头明里", "赫默", 26]
    ]
    // csv格式（过时了）
}