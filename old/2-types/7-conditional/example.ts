import '../assets/css/style.css';

// T extends U ? X : Y;
// string | never | number =>  string | number;
type snbun = string | undefined | number | null | boolean;

interface IHydrantA {
	name: string;
	type: 'A';
}

interface IHydrantB {
	name: string;
	type: 'B';
}

interface IHydrantC {
	name: string;
	type: 'C';
}

let hydrant: IHydrantC = {
	name: 'C',
	type: 'C',
};

type Hydrant = IHydrantA | IHydrantB | IHydrantC;

function metricAB(h: Exclude<Hydrant, IHydrantC>) {}

function metricC(h: Exclude<Hydrant, Exclude<Hydrant, IHydrantC>>) {}

function metricCB(h: Exclude<Hydrant, IHydrantA>) {}

// let v: {
// 	name: string;
// 	type: 'A';
// } | null;
//
// type nonUndefined<T> = T extends undefined | string | null ? never : T;
// const v1: nonUndefined<snbun> = undefined; //  never | never | number | never | boolean
//
// let d: nonUndefined<typeof v> = null;
//
// type ReturnValueType<T extends (...args: any) => any> = T extends (...args: unknown[]) => infer R
// 	? R
// 	: never;
//
// let cb = () => {
// 	return hydrant;
// };
//
// let v: ReturnValueType<typeof cb> = 1;

// type cbs = [() => number | string, () => boolean, () => number];
// type cbs1 = [() => Hydrant, () => boolean, () => number];
//
// type FirstTupleElReturnType<Tuple> = Tuple extends [infer Cb, ...unknown[]]
// 	? Cb extends (...args: unknown[]) => infer ReturnValue
// 		? ReturnValue
// 		: never
// 	: never;
//
// let v: FirstTupleElReturnType<cbs1> = 1;

// type FnUnionFromParamsAndReturnValue<T extends Function> = T extends (
// 	...args: [infer A, infer B]
// ) => infer R
// 	? A | B | R
// 	: never;

// keyof [] ====> 0, 1, 2, pop, reduce, ........

// type OnlyNumKeys<T> = T extends number ? T : never;
// type NonFunction<T> = T extends Function ? never : T;
// type FnUnionFromParamsAndReturnValue<T extends Function> = T extends (
// 	...args: infer Args
// ) => infer R
// 	? Args[number] | R
// 	: // ? Args[OnlyNumKeys<keyof Args>] | R
// 	  // NonFunction<Args[Exclude<keyof Args, 'length'>]> | R
// 	  never;
//
// let sum = (a: number, b: string) => {
// 	return a + b;
// };
//
// let cb = (_str: string, _h: IHydrantC, _cb: () => void) => {
// 	return true;
// };
//
// let v: FnUnionFromParamsAndReturnValue<typeof cb> = 1;

type TrimLeft<T extends string> = T extends `  ${infer Rest}` ? TrimLeft<Rest> : T;

let v: TrimLeft<'     http://localhost' | '   https://localhost'> = '    http://localhost';

type Protocol<S extends string> = S extends `${infer Chars}://${string}` ? Chars : never;

const domain = 'https://localhost';
let protocol: Protocol<typeof domain> = 'http';

type FlattenType<T> = T extends (infer U)[] ? FlattenType<U> : T;

function deepFlatten<Z extends readonly unknown[]>(_x: Z): FlattenType<Z>[] {
	throw new Error('');
}

const arr1: number[] = deepFlatten([1, 2, 3]);
const arr2: number[] = deepFlatten([1, [1, 2], 3]);
const arr3: number[] = deepFlatten([1, [1, [1, 2, 3]], 3]);
