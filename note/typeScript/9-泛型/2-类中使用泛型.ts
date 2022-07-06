// 泛型继承
interface Hero {
    name: string;
}


class selectHero1<T extends Hero>{ // 泛型中的继承
    constructor(private heros: T[]) { }
    getHero(index: number): string {
        return this.heros[index].name
    }
}
const hero1 = new selectHero1([
    { name: "源氏" },
    { name: "半藏" },
    { name: "黑百合" }])
console.log(hero1.getHero(2));

// 泛型约束

class selectHero<T extends number | string>{ // 泛型中的继承
    constructor(private heros: T[]) { }
    getHero(index: number): T {
        return this.heros[index]
    }
}
const hero = new selectHero<string>(["源氏", "半藏", "黑百合"])
console.log(hero.getHero(2));
