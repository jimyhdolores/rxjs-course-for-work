import { from } from 'rxjs';
import { concatMap } from 'rxjs/operators';

// Supongamos que tenemos una función que hace una solicitud HTTP para obtener los detalles de un usuario
const obtenerDetallesUsuario = (usuario: string) => {
	// Esta función devuelve una promesa que resuelve con los detalles del usuario
	return new Promise((resolve) => {
		setTimeout(() => {
			// Simulamos una solicitud HTTP asincrónica con un retardo de 1 segundo
			resolve(`Detalles de ${usuario}`);
		}, 1000);
	});
};

// Creamos un observable que emite una lista de nombres de usuario
const usuariosObservable = from(['usuario1', 'usuario2', 'usuario3']);
// const usuariosObservable = of(['usuario1', 'usuario2', 'usuario3']);

// Aplicamos el operador concatMap para hacer una solicitud HTTP para obtener los detalles de cada usuario
// y luego concatenar los resultados en un solo flujo de salida
const detallesUsuariosObservable = usuariosObservable.pipe(concatMap((usuario) => obtenerDetallesUsuario(usuario)));

export const subscriptionOperatorConcatMap = () => {
	// Nos suscribimos al observable resultante para recibir los detalles de cada usuario en orden
	detallesUsuariosObservable.subscribe((detalles) => console.log(detalles));
};
