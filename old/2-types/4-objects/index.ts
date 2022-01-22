import '../assets/css/style.css';

// const user: {
// 	readonly firstName: string;
// 	readonly age?: number;
// } = {
// 	firstName: 'Ihor',
// 	age: 36,
// };

// let userHashMap: {
// 	[id: string]: typeof user;
// } = {
// 	asdasd123123asda: user,
// 	asda1212222222222: user,
// };
//
// interface IColors {
// 	[sym: symbol]: number;
// }
//
// let colors: IColors = {};
// const red = Symbol('red');
// colors[red] = 255;
//
// //user.age = 30;
//
// interface IOptions {
// 	width: number;
// 	description: string;
//
// 	[key: `data-${string}`]: any;
// }
//
// let opt: IOptions = {
// 	width: 10,
// 	description: 'sdsd',
// 	'data-user': user,
// };

// let arr: (string | number)[] = [1, 's', 1];

// interface IFact {
// 	factId: number;
// 	userId?: string;
// 	male?: boolean;
// 	// factValue: unknown;
// }
//
// interface IDataItem {
// 	action: string;
// 	data: IFact;
// }

//const dataList: IDataItem[] = [{ action: 'go to', data: { factId: 1231 } }];

// let usersArr: readonly typeof user[] = [user, user];
//
// usersArr[100] = user;
//
// usersArr.push(user);

// let usersData: readonly [id: string, user?: typeof user] = ['asdasdasd1w312', user];
//
// usersData[100] = user;
//
// usersData.push(user);
//
// const manager: [title: string, ...User: typeof usersData] = ['Top Manager', 'asdasdasd1w312', user];

// let num = 10 as const;
// let n: typeof num = 10;
//
// let user = {
// 	firstName: 'Ihor',
// 	age: 36,
// 	info: {
// 		male: true,
// 		subjects: ['ts', 'js'],
// 	},
// } as const;
//
// user.firstName = 'Vlad';
// user.info.male = false;
// user.info.subjects.push('angular');
