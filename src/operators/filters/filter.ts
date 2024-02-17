import { from, of } from 'rxjs';
import { filter } from 'rxjs/operators';

// Creamos un observable que emite una secuencia de números
const numbersObservable = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Utilizamos el operador filter para filtrar solo los números pares
const evenNumbersObservable = numbersObservable.pipe(filter((number) => number % 2 === 0));

//#region EJEMPLO 2

/**
 * 
Imagina que estás trabajando en una aplicación de gestión de inventario para una tienda en línea. Tu tarea es manejar una secuencia de productos que llegan al almacén y quieres filtrar solo los productos que están en stock y tienen un precio superior a $50 para mostrarlos en la página principal de la tienda.
 */

// Supongamos que recibimos una lista de productos del servidor

interface IProduct {
	id: number;
	name: string;
	price: number;
	inStock: boolean;
}
const products: IProduct[] = [
	{ id: 1, name: 'Camisa', price: 30, inStock: true },
	{ id: 2, name: 'Pantalones', price: 60, inStock: true },
	{ id: 3, name: 'Zapatos', price: 80, inStock: false },
	{ id: 4, name: 'Bufanda', price: 20, inStock: true },
	{ id: 5, name: 'Abrigo', price: 100, inStock: true }
];

// Creamos un observable a partir de la lista de productos
const productsObservable = from(products);

// Utilizamos el operador filter para filtrar solo los productos en stock y con precio superior a $50
const filteredProductsObservable = productsObservable.pipe(filter((product) => product.inStock && product.price > 50));

//#endregion

export const subscriptionOperatorFilter = () => {
	// Nos suscribimos al observable resultante para recibir los números pares
	evenNumbersObservable.subscribe((number) => console.log(number));

	//#region EJEMPLO 2
	// Nos suscribimos al observable resultante para recibir los productos filtrados
	filteredProductsObservable.subscribe((product) => console.log(product));
	//#endregion
};
