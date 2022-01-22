import '../assets/css/style.css';

// function sum(_a: number, _b: number) {
// 	// ....
// }
//
// sum(1, 2);
// sum(3, 4);

// interface/type/function/class

// interface IAccount<id, info extends { male: boolean } = { male: boolean }> {
// 	id: id;
// 	name: string;
// 	info: info;
// }
//
// // interface IAdmin {
// // 	id: number;
// // 	name: string;
// // }
//
// let user: IAccount<string> = {
// 	id: 'asdasd123123',
// 	name: 'Ihor',
// 	info: {
// 		male: true,
// 	},
// };
//
// let admin: IAccount<number, { male: boolean; subject: string[] }> = {
// 	id: 12313,
// 	name: 'Elena',
// 	info: {
// 		male: false,
// 		subject: ['ts', 'js'],
// 	},
// };
//
// [1, 2, 3, 4].reduce((str: string, item: number) => {
// 	return `${str},${item.toString()}`;
// }, '');

interface IUser {
	name: string;
	age: number;
}

interface IProduct {
	name: string;
	price: number;
}

interface IState {
	user: IUser;
	products: IProduct[];
	bonuses: number;
}

type Select<T> = <F extends keyof T>(state: T, field: F) => T[F];

const state: IState = {
	user: { name: 'Ihor', age: 36 },
	products: [
		{ name: 'IPhone X', price: 50 },
		{ name: 'IPad', price: 30 },
	],
	bonuses: 0.8,
};

const select: Select<IState> = (storeState, fields) => storeState[fields];

const user: IUser = select(state, 'user');
const products: IProduct[] = select(state, 'products');
const bonuses: number = select(state, 'bonuses');
