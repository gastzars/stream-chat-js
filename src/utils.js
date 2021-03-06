/**
 * logChatPromiseExecution - utility function for logging the execution of a promise..
 *  use this when you want to run the promise and handle errors by logging a warning
 *
 * @param {type} promise The promise you want to run and log
 * @param {type} name    A descriptive name of what the promise does for log output
 *
 */

export function logChatPromiseExecution(promise, name) {
	promise
		.then(() => {
			// do nothing...
		})
		.catch(error => {
			console.warn(`failed to do ${name}, ran into error: `, error);
		});
}

export const sleep = m => new Promise(r => setTimeout(r, m));
