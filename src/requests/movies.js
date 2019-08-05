import Data from './data';

// export default function getMovies(payload) {
// 	return new Promise((resolve, reject) => {
// 		fetch('https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs').then(
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
