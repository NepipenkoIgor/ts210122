import '../assets/css/style.css';

type RequiredOrOmit<T, U, Z extends keyof U> = T extends true ? U : Omit<U, Z>;

function test<T extends boolean>(show: T) {
	type result = RequiredOrOmit<
		T,
		{
			test: number;
			value: () => string;
		},
		'value'
	>;
	if (show) {
		return {
			test: 1,
			value: () => '1',
		} as result;
	}
	return {
		test: 1,
	} as result;
}

test(true).value();
test(false);
