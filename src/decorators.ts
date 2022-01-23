import 'reflect-metadata';

export function LogEventValue(
	target: any,
	key: string,
	descriptor: TypedPropertyDescriptor<any>,
): TypedPropertyDescriptor<any> {
	const originalValue = descriptor.value;
	return {
		...descriptor,
		value(e: Event) {
			const value: string = (e.target as HTMLInputElement).value;
			console.log(`Input value in method ${key} of ${target.constructor.name} equal to ${value}`);
			return originalValue.call(this, e);
		},
	};
}

export function Debounce(ms: number) {
	let timeID: number | null;
	return (
		_target: any,
		_key: string,
		descriptor: TypedPropertyDescriptor<any>,
	): TypedPropertyDescriptor<any> => {
		const originalValue = descriptor.value;
		return {
			...descriptor,
			value(e: Event) {
				if (timeID) {
					clearTimeout(timeID);
				}
				timeID = window.setTimeout(() => {
					return originalValue.call(this, e);
				}, ms);
			},
		};
	};
}

export function SavePersistence(target: any, key: string): void {
	const localKey = `ts220122_${key}`;

	const getter = () => {
		return localStorage.getItem(localKey);
	};

	const setter = (newValue: string) => {
		return localStorage.setItem(localKey, newValue);
	};

	Object.defineProperty(target, key, {
		get: getter,
		set: setter,
		enumerable: true,
		configurable: true,
	});
}

export function CheckTypeInRuntime(target: any, key: string): void {
	const { name: type } = Reflect.getMetadata('design:type', target, key);
	let value: any;

	Object.defineProperty(target, key, {
		get() {
			return value;
		},
		set(newValue) {
			const realType = typeof newValue;
			const expectedType = type.toLowerCase();
			if (realType !== expectedType) {
				throw new Error(
					`type of ${key} property is not ${expectedType}. You tried to set ${realType}`,
				);
			}
			value = newValue;
		},
		enumerable: true,
		configurable: true,
	});
}

const RANGE_KEY = 'design:RANGE_KEY';

export function RangeInterval(min: number, max: number) {
	return (target: any, key: string, index: number): void => {
		const existingRange = Reflect.getMetadata(RANGE_KEY, target, key) ?? {};
		existingRange[index] = [min, max];
		Reflect.defineMetadata(RANGE_KEY, existingRange, target, key);
	};
}

export function Validate(target: any, key: string, descriptor: TypedPropertyDescriptor<any>): void {
	const originalValue = descriptor.value;
	descriptor.value = function (...args: any[]) {
		const existingRange = Reflect.getMetadata(RANGE_KEY, target, key) ?? {};
		for (const [paramIndex, range] of Object.entries(existingRange)) {
			const [min, max] = range as [min: number, max: number];
			const numParamIndex = Number(paramIndex);
			const paramValue = args[numParamIndex];
			if (paramValue < min || paramValue > max) {
				throw new Error(`Error in ${target.constructor.name} instance.
				Parameter of method ${key} on position ${numParamIndex + 1} out of range [${min}, ${max}].
				Curren value ${paramValue}
			
				`);
			}
		}
		return originalValue.call(this, ...args);
	};
}
