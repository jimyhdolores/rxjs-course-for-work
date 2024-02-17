import { finalize, of, switchMap } from 'rxjs';

const switched = of(1, 2, 3).pipe(
	switchMap((x) => of(x + 1).pipe(finalize(() => console.log('observable ya no emite datos'))))
);

export const subscriptionOperatorSwitchMap = () => {
	switched.subscribe({
		next: (number) => console.log(number)
	});
};
