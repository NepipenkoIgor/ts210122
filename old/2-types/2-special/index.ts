import '../assets/css/style.css';

// interface IUserAccount {
// 	firstName: string;
// 	age: number;
// }
//
//
// const user: IUserAccount = IUserAccount;

// const user = {
// 	firstName: 'Ihor',
// 	age: 36,
// };
//
// const person: typeof user = user;

// class Point {
// 	public x: number = 1;
// }
//
// const p: Point = new Point();

let a: number | null = null;
let b = 2;
b = 0x0202;
b = NaN;
b = Infinity;
// b = null;
a = null;

let str: string = 's';
str = `${b}`;

let bool: boolean = true;
bool = false;

let und: undefined = undefined;
let nill: null = null;

let bigInt: bigint = 4n;
bigInt = 4n + 5n;

const key1: symbol = Symbol('key1');
const key2: unique symbol = Symbol('key1');
const key3 = Symbol('key3');

let strictObject = {
	[key1]: 101,
	[key2]: 102,
	[key3]: 103,
};
