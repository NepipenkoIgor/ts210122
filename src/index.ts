// import '../assets/css/style.css';

interface IPoint {
	x: sn;

	sum(): number;
}

type sn = string | number;

type Constructable = new (...args: any) => any;

function Timestamped<BaseClass extends Constructable>(BC: BaseClass) {
	return class extends BC {
		public timestamp = Date.now();
	};
}

function Tagged<BaseClass extends Constructable>(BC: BaseClass) {
	return class extends BC {
		public tags = ['ts', 'js'];
	};
}

class BasePoint implements IPoint {
	#p: number = 3;

	public constructor(x: string, y: number, z: number);
	public constructor(x: number, y: string, z: number);
	public constructor(public x: sn, protected y: sn, private z: number) {}

	public sum(): number {
		return Number(this.x) + Number(this.y) + this.z + this.#p;
	}
}

class Point extends Tagged(Timestamped(BasePoint)) {
	public constructor(x: number, y: string, z: number) {
		super(x, y, z);
	}

	public override sum(): number {
		// do something
		return super.sum();
	}
}

const p1: Point = new Point(1, '2', 1);
console.log(p1);

// class Singleton {
// 	private static instance: Singleton;
//
// 	private constructor() {}
//
// 	public static getInstance(): Singleton {
// 		if (!Singleton.instance) {
// 			Singleton.instance = new Singleton();
// 		}
// 		return Singleton.instance;
// 	}
// }
//
// const inst1 = Singleton.getInstance();
// const inst2 = Singleton.getInstance();
// const inst3 = Singleton.getInstance();
// const inst4 = Singleton.getInstance();
// const inst5 = Singleton.getInstance();

class Singleton {
	public static instance: Singleton;

	public x: number = 1;

	static {
		console.log('static block');
		Singleton.instance = new Singleton();
	}

	public constructor() {
		console.log('init');
		if (Singleton.instance) {
			return Singleton.instance;
		}
	}

	public getX() {
		return this.x;
	}
}

const inst1 = new Singleton();
const inst2 = new Singleton();
const inst3 = new Singleton();
const inst4 = new Singleton();
const inst5 = new Singleton();

console.log(Singleton.instance);
console.log(inst1);
console.log(Singleton.instance === inst3);
console.log(inst1 === inst4);
console.log(inst2 === inst5);

abstract class AbstractControl<T> {
	public abstract model: T;

	public abstract getModel(): T;

	public onFocus() {
		// do something
	}

	public onBlur() {
		// do something
	}
}

abstract class AbstractControlWithSet<T> extends AbstractControl<T> {
	public abstract setModel(model: T): void;
}

class MHInputControl extends AbstractControlWithSet<string> {
	public model = '';

	public override getModel(): string {
		return '';
	}

	public override setModel(_model: string) {}
}

interface IDropDownItem {
	text: string;
	value: string | number;
}

class MHDropDownControl extends AbstractControlWithSet<IDropDownItem[]> {
	public model: IDropDownItem[] = [];

	public override getModel(): IDropDownItem[] {
		return [];
	}

	public override setModel(_model: IDropDownItem[]) {}
}
