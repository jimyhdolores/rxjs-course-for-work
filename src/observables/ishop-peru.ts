import { Observable } from 'rxjs';

export const iShopPeruLima = new Observable<string>((subscriber) => {
	subscriber.next('Aun no tenemos el iphone 16 😔');

	setInterval(() => subscriber.next('Mantengase a la espera 🙏'), 400);

	//#region COMPLETE
	setTimeout(() => {
		subscriber.next('El nuevo iphone📱 ya esta disponible🤗');
		subscriber.complete();
		subscriber.next('El nuevo iphone📱 ya esta disponible🤗');
	}, 2000);
	//#endregion

	//#region ERROR
	setTimeout(() => {
		subscriber.error('Hubo un problema en nuestros servidores🤪');
		subscriber.next('Hubo un problema en nuestros servidores🤪');
	}, 2000);
	//#endregion

	//#region UNSUBSCRIBE
	setTimeout(() => {
		subscriber.next('Hemos decidido cancelar su suscripción 🔕');
		subscriber.unsubscribe();
		subscriber.next('Hemos decidido cancelar su suscripción');
	}, 2000);
	//#endregion
});

export const iShopPeruSanIsidro = (activateUnsubscribe: boolean) => {
	return new Observable<string>((subscriber) => {
		subscriber.next('Aun no tenemos el iphone 16 😔');

		setInterval(() => subscriber.next('Mantengase a la espera 🙏'), 400);

		if (activateUnsubscribe) {
			setTimeout(() => {
				subscriber.next(
					'El nuevo iphone📱 ya esta disponible🤗, por lo tanto hemos decidido cancelar su suscripción 🔕'
				);
				subscriber.unsubscribe();
			}, 2000);
		}
	});
};
