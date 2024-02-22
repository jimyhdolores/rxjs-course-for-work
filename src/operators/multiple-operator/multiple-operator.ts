import { of, throwError } from 'rxjs';
import { catchError, concatMap, filter, map } from 'rxjs/operators';

const numeros = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

const multiple = numeros.pipe(
	filter((numero) => numero % 2 === 0), // Filtrar números pares
	map((numero) => {
		if (numero === 8) {
			throw new Error('¡Error provocado!');
		}
		return numero * 2; // Multiplicar cada número par por 2
	}),
	catchError(() => of(-1))
);

// Función que simula una búsqueda de libros en una API externa
const searchBooks = (termSearch: string) => {
	// Simulamos una búsqueda exitosa
	// En una aplicación real, aquí llamaríamos a una API externa
	if (termSearch === 'rxjs') {
		return of([
			{ title: 'RxJS en Acción', score: 4.5 },
			{ title: 'Aprendiendo RxJS', score: 4.8 },
			{ title: 'Mastering RxJS', score: 4.2 }
		]);
	} else {
		// throw new Error('¡Error provocado!');
		// Simulamos un error si el término de búsqueda no es válido
		return throwError(() => new Error('Búsqueda no válida'));
	}
};

// Función que busca libros, filtra los resultados y muestra los detalles
const searchBooksWithFilter = (termSearch: string) => {
	return searchBooks(termSearch).pipe(
		concatMap((libros) => libros), // Aplanamos el array de libros
		filter((libro) => libro.score > 4), // Filtramos los libros con calificación superior a 4
		catchError((error) => {
			// Manejo de errores
			console.error('Error en la búsqueda:', error);
			// Devolvemos un observable vacío o un valor alternativo
			// return EMPTY;
			return of([]);
		})
	);
};

export const subscriptionMultipleOperators = () => {
	// multiple.subscribe({
	// 	next: (data) => console.log(data),
	// 	error: (error) => console.log('Error: ', error)
	// });

	const termSearch = 'rxjss';
	searchBooksWithFilter(termSearch).subscribe({
		next: (book) => console.log('Detalles del libro:', book),
		error: (error) => console.log('Detalles del error:', error)
	});
};
