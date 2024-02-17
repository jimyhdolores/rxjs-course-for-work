import { from, of } from 'rxjs';

const numbers = from([1, 2, 3, 4, 5]);
numbers.subscribe({
	next: (number) => console.log(number)
});

interface IPerson {
	id: number;
	name: string;
}

const juan: IPerson = { id: 1, name: 'Juan' };
const maria: IPerson = { id: 2, name: 'Maria' };
const pedro: IPerson = { id: 3, name: 'Pedro' };

const personsOf = of(juan, maria);
// const personsOf = of([juan, maria], pedro);
const personsFrom = from([juan, maria]);

export const subscriptionCreateObservable = () => {
	personsOf.subscribe({
		next: (person) => console.log('Person OF: ', person)
	});

	personsFrom.subscribe({
		next: (person) => console.log('Person FROM: ', person)
	});
};
