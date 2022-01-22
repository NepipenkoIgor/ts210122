Object.defineProperty(window, 'MySweetApp', { value: 'v1.0.0', writable: true });

function deliveryMethod() {
	// TODO
	return 'overnight';
}

function shipWeight() {
	const el = document.getElementById('weight');
	//  const el = document.getElementById('weight');
	// if (!el) {
	//     return 0;
	// }
	return parseInt(el!.innerHTML);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function sendUpdates(emailAddr: string | string[]) {
	function sendEmail(addr: string) {
		console.log(`Shipping to ${addr} via ${deliveryMethod() || 'standard'} delivery`);

		if (shipWeight() > 100) {
			console.log('WARNING: Oversize package');
		}
	}

	if (Array.isArray(emailAddr)) {
		emailAddr.forEach((val) => {
			sendEmail(val.trim());
		});
	} else {
		sendEmail(emailAddr.trim());
	}
}

// function get(_req: any, res: any) {
// 	return res;
// }
//
// const inArr: boolean = [1, 2, 3].includes(3);
// // /** @type{Array.<number>}**/
// // const a = ['s'];
// class Cat {
// 	name: string;
// }
//
// class Dog {
// 	name: string;
// }
//
// const c: Cat = new Dog();
