import { Observable, Subject, takeUntil } from 'rxjs';

const unsubscribe$ = new Subject<void>();

const observable = new Observable<number>((observer) => {
	let count = 0;
	let intervalId = setInterval(() => {
		observer.next(count++);
	}, 1000);

	// Retornamos una función de limpieza para cancelar el intervalo cuando se complete o se cancele la suscripción
	return () => {
		clearInterval(intervalId);
	};
});

export const subscriptionOperatorTakeUntil = () => {
	observable.pipe(takeUntil(unsubscribe$)).subscribe((valor) => console.log(valor));
	observable.pipe(takeUntil(unsubscribe$)).subscribe((valor) => console.log(valor));
	observable.pipe(takeUntil(unsubscribe$)).subscribe((valor) => console.log(valor));

	setTimeout(() => {
		console.log('CANCELANDO TODOS LAS SUSCRIPCIONES');
		unsubscribe$.next();
		unsubscribe$.unsubscribe();
	}, 3000);
};
