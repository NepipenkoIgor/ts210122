// T extends U ? X : Y;
// string | never | number =>  string | number;

interface IPerson {
	readonly name: string;
	readonly age: number;
	info: {
		male: boolean;
	};
	subjects: string[];
}

let r: Required<any>;
// type ReadOnlyAndOptional<T> = {
// 	readonly [P in keyof T]: ReadOnlyAndOptional<T[P]>;
// };
//
// let user: ReadOnlyAndOptional<IPerson> = {
// 	name: 'Ihor',
// 	age: 36,
// 	info: {
// 		male: true,
// 	},
// 	subjects: ['ts'],
// };
//
// user.info.male = false;
//
// let r: Required<any>;

type RemoveKeyByValueAndUnion<T, E> = {
	[P in keyof T]: T[P] extends E ? never : P;
}[keyof T];
let v: RemoveKeyByValueAndUnion<IPerson, string | number> = 'info';
/*
 name: never,
 age: never,
 info: info
 subjects: subjects

 ===> never | never | info | subjects
 */

type RemoveKeys<T, E> = {
	[P in keyof T as Exclude<P, E>]: T[P];
};

let v1: Pick<IPerson, 'name' | 'age'> = {
	name: 'Ihor',
	age: 36,
	// info: {
	//     male: true,
	// },
	// subjects: ['js'],
};

/*
type CapitalizedKeysAndGetter<T> = {
	[P in keyof T as `get${Capitalize<P & string>}`]: () => T[P];
};

const getUser: CapitalizedKeysAndGetter<IPerson> = {
	getName: () => 'Ihor',
	getAge: () => 36,
	getInfo: () => ({ male: true }),
	getSubjects: () => ['ts'],
};
*/
type TypedObject<T, U> = {
	[P in keyof T as `${U & string}${string & P}`]: () => T[P];
};

function createSimpleReducer<T extends string>(name: T) {
	const obj = {
		Pending: () => {
			return 1;
		},
		Success: () => {
			return '1';
		},
		Error: () => {
			return true;
		},
	};
	const result: { [key: string]: Function } = {};
	for (const [key, value] of Object.entries(obj)) {
		result[`${name}${key}`] = value;
	}
	return result as TypedObject<typeof obj, T>;
}

createSimpleReducer('user');
