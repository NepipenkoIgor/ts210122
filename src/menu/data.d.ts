export declare const list: {
	title: string;
	items: {
		title: string;
		items: (
			| {
					title: string;
					items?: never;
			  }
			| {
					title: string;
					items: {
						title: string;
					}[];
			  }
		)[];
	}[];
}[];
