import { Observable, catchError, of } from 'rxjs';

const source = new Observable<string>((observer) => {
	observer.next('Valor inicial');
	observer.error('Ocurrió un error');
});

export const subscriptionOperatorCatchError = () => {
	source
		.pipe(
			catchError((error) => {
				console.error('Error controlado desde el Operador');
				return of({ code: 'ERR001', msg: 'Error controlado' });
			})
		)
		.subscribe({
			next: (data) => console.log(data),
			error: (error) => console.log(error)
		});
};
