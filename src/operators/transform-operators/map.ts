import { map, of } from 'rxjs';

// Creamos un observable que emite números
const numbersObservable = of(1, 2, 3, 4, 5);

// Aplicamos el operador map para multiplicar cada número por 2
const multiplicadosObservable = numbersObservable.pipe(map((numero) => numero * 2));

/**
 * Supongamos que tienes un observable que emite un array de objetos representando los productos comprados por un usuario, donde cada objeto tiene las propiedades nombre y precio. Puedes usar el operador map para calcular el precio total de cada producto con impuestos incluidos.
 */
interface Product {
	name: string;
	price: number;
}

// Creamos un observable que emite un array de objetos Articulo
const articulosObservable = of<Product[]>([
	{ name: 'Camisa', price: 20 },
	{ name: 'Pantalón', price: 30 },
	{ name: 'Zapatos', price: 50 }
]);

// Aplicamos el operador map para calcular el precio total de cada artículo con impuestos
const precioTotalObservable = articulosObservable.pipe(
	map((products) => {
		// Para cada artículo, calculamos el precio total con impuestos
		// return { ...products, totalPrice: products.price * 0.01 };
		return products.map((product) => ({
			...product,
			totalPrice: calculateTotalPrice(product.price) // Aplicamos un impuesto del 18%
		}));
	})
);

const calculateTotalPrice = (price: number) => {
	const igv = price * 0.18;
	const totalPrice = price + igv;

	return Number(totalPrice.toFixed(2));
};

// Nos suscribimos al observable resultante para recibir los artículos con precios totales

export const subscriptionOperatorMap = () => {
	// Nos suscribimos al observable resultante para recibir los valores multiplicados
	multiplicadosObservable.subscribe((resultado) => console.log(resultado));

	precioTotalObservable.subscribe((products) => console.log(products));
};
