import '../assets/css/style.css';

let anyType: any = {};
anyType.a = 1;
anyType = null;
anyType.a.b = 1;
anyType();

let unkType: unknown = {};
unkType.a = 1;
unkType = null;
unkType.a.b = 1;
unkType();

let v: void = undefined;

function fn(): void {}

function fn1(): never {
	throw new Error();
}
