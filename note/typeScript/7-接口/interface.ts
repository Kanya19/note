{
    interface Wafe {
        name: string;
        age: number;
        bust: number;
        waistline?: number;  // ?表示可有可没有
        [propname: string]: any; // 定义了任意属性名称且必须为string，键值为any
        say(): string // 定义了say方法，返回值必须是string类型
    }// 定义接口

    interface BigWafe extends Wafe{ // 接口之间的继承
        lead() : void
    }

    class newWafe implements Wafe{ // newWafe类收到Wafe接口的约束
        name="安乐冈花火"
        age=16
        bust=90
        say(){
            return '来者不拒，去者不追，这种人一定很孤独吧！！'
        }
    }

    const wafe = {
        name: "鬼头明里",
        age: 20,
        bust: 94,
        waistline: 21,
        height: 165,
        say() {
            return "兄さんならきっと大丈夫です"
        },
        lead(){
            return "你为什么这么熟练啊"
        }
    }

    const screenResume = (wafe: Wafe) => {
        wafe.age < 24 && wafe.bust >= 90 && console.log(wafe.name + '进入面试')
        wafe.age >= 24 && wafe.bust < 90 && console.log(wafe.name + '你被淘汰了');
    }
    const getResume = (wafe: BigWafe) => {
        console.log(wafe.name + "年龄是" + wafe.age);
        console.log(wafe.name + "是" + wafe.bust);
        wafe.waistline && console.log(wafe.name + "腰围是：" + wafe.waistline);
        wafe.height && console.log(wafe.name + "身高是：" + wafe.height);
        console.log(wafe.say());
        console.log(wafe.lead());
    }

    screenResume(wafe)
    getResume(wafe);
}