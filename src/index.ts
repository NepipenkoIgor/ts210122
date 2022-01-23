// import '../assets/css/style.css';

import {
	CheckTypeInRuntime,
	Debounce,
	LogEventValue,
	RangeInterval,
	SavePersistence,
	Validate,
} from './decorators';

class SearchComponent {
	@CheckTypeInRuntime
	@SavePersistence
	public initialValue!: string;

	public constructor(private readonly inputEl: HTMLInputElement) {
		this.inputEl.addEventListener<'input'>('input', this.onSearch.bind(this));
		console.log(this.initialValue);
		// Search initial
	}

	@Debounce(300)
	@LogEventValue
	public onSearch(this: SearchComponent, _event: Event): void {
		// do something
		this.initialValue = (_event.target as HTMLInputElement).value;
	}

	@Validate
	public updatePercentage(oldValue: number, @RangeInterval(30, 70) newValue: number) {
		console.log(oldValue, newValue);
	}
}

const inputEl = document.querySelector('input') as HTMLInputElement;
const sc = new SearchComponent(inputEl);

sc.updatePercentage(40, 50);
setTimeout(() => {
	// (sc.initialValue as any) = 123123;
	sc.updatePercentage(50, 10);
}, 5000);
