import { average } from './functions';

describe('Average Fn', () => {
	it('Should work', () => {
		expect(average(1, '1')).toEqual(`Average is 1`);
		expect(average('1', 1)).toEqual(`Average is 1`);
		expect(average(1, 1, 1)).toEqual(`Average is 1`);
	});
});
