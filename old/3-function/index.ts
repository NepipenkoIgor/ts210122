import '../assets/css/style.css';

// function average(a: number, b: number, c: number): string {
// 	const avg: number = (a + b + c) / 3;
// 	return `Average is ${avg}`;
// }

// function average(a: number, b?: number, c?: number): string {
// 	if (b === undefined) {
// 		// eslint-disable-next-line no-param-reassign
// 		b = 0;
// 	}
// 	if (c === undefined) {
// 		// eslint-disable-next-line no-param-reassign
// 		c = 0;
// 	}
// 	const avg: number = (a + b + c) / 3;
// 	return `Average is ${avg}`;
// }

// function average(a: number, b: number = 0, c: number = 0): string {
// 	const avg: number = (a + b + c) / 3;
// 	return `Average is ${avg}`;
// }
type sn = string | number;

function isString(arg: sn): arg is string {
	return typeof arg === 'string';
}

function average(a: string, b: number): string;
function average(a: number, b: string): string;
function average(a: number, b: number, c: number): string;
function average(...args: sn[]): string {
	let total: number = 0;
	for (const arg of args) {
		//const isString = typeof arg === 'string';
		if (isString(arg)) {
			total += Number(arg);
			continue;
		}
		total += arg;
	}
	const avg: number = total / args.length;
	return `Average is ${avg}`;
}

// average(1, 1);
// average(1, 2);
// average('1', '2');
// average(1, '2');
// average('2', 1);
// average(1, 2, 32, 3, 4, 5);
// average(1, 2, 32, 3, 4, 5, 1231, 123);
// average(1, 2, '2');
// const b: number = average(1, 2, 3);

// interface IAdmin {
// 	name: string;
// 	subject: string[];
// }
//
// interface IUser {
// 	name: string;
// 	age: string;
// }
//
// function isUser(person: IUser | IAdmin): person is IUser {
// 	return 'age' in person;
// }
//
// function doSomeThing(person: IUser | IAdmin) {
// 	if(isUser(person)){
// 		person.
// 	}else  {
// 		person.
// 	}
// }

// function test(show: true): { test: number; value: () => string };
// function test(show: false): { test: number };
// function test(show: boolean) {
// 	if (show) {
// 		return {
// 			test: 1,
// 			value: () => '1',
// 		};
// 	}
// 	return {
// 		test: 1,
// 	};
// }
//
// test(true);
// test(false);

// function getFullName(this: { name: string; surname: string }) {
// 	return `${this.surname}${divider}${this.surname}`;
// }
//
// let account = {
// 	name: 'Ihor',
// 	surname: 'Nepipenko',
// 	getFullName,
// };
//
// account.getFullName();
//
// document.addEventListener<'click'>('click', getFullName);
//
// class P {
// 	public handler(this: this) {}
// }
