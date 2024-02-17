import { Observable } from 'rxjs';

// Creamos un Cold Observable que emite páginas del libro cada vez que alguien se suscribe
const coldObservable = new Observable<string>((observer) => {
	// Simulamos la lectura del libro página por página
	const pages = ['Página 1', 'Página 2', 'Página 3'];
	pages.forEach((page) => {
		observer.next(page);
	});
	observer.complete(); // Finalizamos la secuencia después de emitir todas las páginas
});

export const coldSubscriptions = () => {
	// Suscripción 1 al Cold Observable
	coldObservable.subscribe((page) => console.log(`Leyendo página 1: ${page}`));

	// Después de 2 segundos, se suscribe un segundo lector
	setTimeout(() => {
		coldObservable.subscribe((page) => console.log(`Leyendo página 2: ${page}`));
	}, 2000);
};
