var num = typeof 42;
console.log(num);

//boolean
let isCompleted: boolean = false;

//Number Type
const decimal: number = 6; //other

//String Type
const name1: string = 'Valera';

//Null & Undefine Types
const n: null = null;
const u: undefined = undefined;

//Void Type
const geetUser = (): void =>{
    alert("Hello!");
}

//Array Type
let list: number[] = [1, 2, 3];
let listGeneric: Array<number> = [1, 2, 3];

//Tuple Type
let x: [string, number];
x = ["hello", 10];

let y: [any, any];
y = [10, "hello"];

//Enum Type
enum Directions{
    Up = 2,
    Down = 5,
    Left = 6,
    Right
}

Directions.Up;
Directions.Down;
Directions.Left;
Directions.Right;

//Never Types
const msg = "Hello";
const error = (msg: string): never => {
    throw new Error(msg);
}

//Object Type
const create = (o: object | null): void => { };
create({obg: 1});

//Multiple types
let id1: number | string;

id1 = 10;
id1 = '42';

//Type

type Name = string

let id: Name;
id = '42'















