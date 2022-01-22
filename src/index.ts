import '../assets/css/style.css';
import { AnimationEnum } from './header.interface';

// let a: 1 | 2 | 3 = 1;

// export type AnimationType = 'ease' | 'ease1';
// export type AnimationDirection = 'in' | 'out';
//
// export interface IOptions {
// 	delay: number;
// 	// type: `${AnimationType}-${AnimationDirection}`;
// 	// type: `${string}-in`;
// 	type: AnimationEnum;
// }
//
// export function animate(opt: IOptions) {
// 	if (opt.type === 'ease-in') {
// 	}
// }
//
// animate({ delay: 100, type: AnimationEnum.EASE_IN });

// interface IFact {
// 	factId: number;
// 	userId: string;
// 	male: boolean;
// 	// factValue: unknown;
// }
//
// const dataList: { action: string; data: IFact }[] = [];
//
// const uniqueValue = (): keyof IFact => {
// 	//  'factId' | 'userId' |  'useTo' |'factValue'
// 	return 'factId';
// };
//
// dataList.map((item: { action: string; data: IFact }) => {
// 	if (item.data[uniqueValue()] === 2) {
// 		//....
// 	}
// 	return item;
// });
//
// let v: IFact[keyof IFact] = () => {}; // number | string | boolean

const values = Object.keys(AnimationEnum).map((item: string) => {
	return AnimationEnum[item as keyof typeof AnimationEnum];
});

// interface IAccount {
// 	name: string;
// 	surname: string;
// 	age: number;
// 	male: boolean;
// }
//
// type IAccountKeys = 'name' | 'surname' | 'age' | 'male';
// let key: IAccount[keyof IAccount] = 'male'; // 'name'  ....
