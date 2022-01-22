/* eslint-disable @typescript-eslint/no-unused-vars */
// import '../assets/css/style.css';

/**let/const **/
let period = 50;
const baseUrl = 'http://localhost';

/**object**/
let firstName = 'Ihor';
const acc = {
	firstName,
	getName() {
		return this.firstName;
	},
};

/** spread **/

let person = { ...acc };
let dates = [...[1, 2, 3]];

/**destructuring**/
let { firstName: username } = acc;

let [firstDate] = dates;

/**template string**/
function userMessage([start, end]: TemplateStringsArray, { firstName: userName }: typeof person) {
	return `${start}${userName}${end}`;
}

console.log(userMessage`Good day, ${person} !!`);

/**arrow*/

let sum = (a: number, b: number) => a + b;

/**Class**/
class Point {
	public x: number = 1;

	public y: number = 1;

	public sum() {
		return this.x + this.y;
	}
}

/* Optional chaining ***/
const user: any = {};
const x = user?.info?.male;

/**??**/
let admin;
let p = admin ?? user;
