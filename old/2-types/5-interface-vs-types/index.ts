import '../assets/css/style.css';

/**Objects*/
// interface IPoint {
// 	x: number;
// 	y: number;
// }
//
// type TPoint = { x: number; y: number };
//
// let p: IPoint = {
// 	x: 1,
// 	y: 1,
// };

/**Objects*/

// interface ISetPoint {
// 	(x: number, y: number): void;
// }
//
// // type TSetPoint = (x: number, y: number) => void;
// type TSetPoint = {(x: number, y: number) : void};
//
// let setPoint: TSetPoint = function fn(_x: number, _y: number) {};

/**Extends*/
interface IX {
	x: number;
}

interface IY {
	y: number;
}

type TX = { x: number };
type TY = { y: number };

type TPoint = TX & IY;

interface IPoint extends TX, IY {}

let point: TPoint = {
	x: 1,
	y: 1,
};

/**implements*/
class Point implements TX, IY {
	public x: number = 1;

	public y: number = 1;
}

type snb = string | number | boolean;
type cb = (value: string) => void;

interface IInfo {
	info: {
		male: boolean;
	};
}

interface IUser extends IInfo {
	name: string;
	age: number;
	info: {
		male: boolean;
	} & { subjects: string[] };
}

let u: IUser = {
	name: 'Ihor',
	age: 36,
	info: {
		male: true,
		subjects: ['ts', 'js'],
	},
};
