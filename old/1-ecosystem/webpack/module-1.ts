// import '../assets/css/style.css';

function sleep(ms: number) {
	return new Promise<void>((resolve) => {
		setTimeout(resolve, ms);
	});
}

async function* getItemsReallySlowly<T>(items: Iterable<T>): AsyncIterableIterator<T> {
	for (const item of items) {
		await sleep(1000);
		yield item;
	}
}

function fn() {
	throw new Error('My Erro');
}

fn();

export async function speakLikeSloth1(items: string[]) {
	for await (const item of getItemsReallySlowly(items)) {
		console.log(item);
	}
}
