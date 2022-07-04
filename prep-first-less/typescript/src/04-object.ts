type Person = { name: string, age: number, nickName?: string, getPass?: () => string };

let user: Person  = {
    name: 'Jack',
    age: 30,
    nickName: 'Test'
};

let admin: Person  = {
    name: 'Jack2',
    age: 31,
    nickName: 'Test2',
    getPass(): string {
        return 'asa'
    }
};
