import Data from './data';

// export default function getMovies(payload) {
// 	return new Promise((resolve, reject) => {
// 		let data = {
// 			Accept: 'application/json',
// 			'Content-Type': 'application/json'
// 		};

// 		let myInit = {
// 			method: 'GET',
// 			mode: 'no-cors',
// 			header: data
// 		};
// 		fetch('https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs', myInit).then(
// 			(response) => {
// 				if (response.ok) {
// 					return resolve(response.body);
// 				}
// 			},
// 			(error) => reject(error)
// 		);
// 	});
// }

export default function getMovie() {
	return new Promise((resolve, reject) => resolve(Data));
}
