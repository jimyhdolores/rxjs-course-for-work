import { Observable, concat, of } from 'rxjs';

// Creamos dos observables que emiten valores simples
const observable1 = of(1, 2, 3);
const observable2 = of('Hola');

//#region EJEMPLO 2

// Función para simular la creación de un usuario en el servidor
function createUser(): Observable<any> {
	return new Observable((observer) => {
		// Supongamos que aquí realizaríamos una solicitud HTTP al servidor para crear un usuario
		setTimeout(() => {
			// observer.error();
			observer.next({ message: 'Usuario creado con éxito' });
			observer.complete();
		}, 1000); // Simulamos un retraso de 1 segundo para la operación
	});
}

// Función para simular el envío de un correo electrónico de confirmación
function sendConfirmationEmail(emailData: any): Observable<any> {
	return new Observable((observer) => {
		// Supongamos que aquí realizaríamos una solicitud HTTP al servidor para enviar el correo electrónico
		setTimeout(() => {
			observer.next({ message: 'Correo electrónico de confirmación enviado', emailData });
			observer.complete();
		}, 1500); // Simulamos un retraso de 1.5 segundos para la operación
	});
}

//#endregion

export const subscriptionOperatorConcat = () => {
	// Utilizamos el operador concat para combinar los observables
	// const concatenatedObservable = concat(observable1, observable2);
	// concatenatedObservable.subscribe((value) => console.log(value));

	//#region ejemplo 2

	// Concatenación de las operaciones createUser y sendConfirmationEmail
	concat(createUser(), sendConfirmationEmail('ejemplo@correo.com')).subscribe({
		next: (response) => {
			console.log('Response:', response);
			// Aquí puedes manejar la respuesta, por ejemplo, redirigiendo al usuario a una página de confirmación.
		},
		error: (error) => {
			console.error('Error:', error);
			// Aquí puedes manejar el error, por ejemplo, mostrando un mensaje de error al usuario.
		}
	});
	//#endregion
};
