import { iShopPeruSanIsidro } from './observables/ishop-peru';

export const iShopSubscriptions = () => {
	iShopPeruSanIsidro(true).subscribe({
		next: (data) => {
			console.log(data);
		},
		complete: () => {
			console.log('Completado');
		},
		error: (error) => {
			console.log('error: ', error);
		}
	});

	const subscription = iShopPeruSanIsidro(false).subscribe({
		next: (data) => {
			console.log(data);
		},
		complete: () => {
			console.log('Completado');
		},
		error: (error) => {
			console.log('error: ', error);
		}
	});

	setTimeout(() => {
		console.log('Cancelando la subscripción desde el Subscriptor');
		subscription.unsubscribe();
	}, 5000);
};
