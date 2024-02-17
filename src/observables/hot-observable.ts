import { Subject } from 'rxjs';

// Creamos un Subject que actúa como un Hot Observable emitiendo música aleatoria
const hotObservable = new Subject<string>();
setInterval(() => hotObservable.next(`Canción ${Math.floor(Math.random() * 50)}`), 2000);

export const hotdSubscriptions = () => {
	// Suscripción 1 al Hot Observable (Radio)
	hotObservable.subscribe((song) => console.log(`Escuchando en la radio: ${song}`));

	// Después de 3 segundos, se sintoniza la radio un segundo oyente
	setTimeout(() => {
		hotObservable.subscribe((song) => console.log(`Sintonizando la radio: ${song}`));
	}, 4000);
};
