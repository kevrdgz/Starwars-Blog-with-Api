const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planets: []
		},
		actions: {
			fetchcharacter() {
				fetch("https://www.swapi.tech/api/people/")
					.then(response => response.json())
					.then(result => {
						let list = [];
						result.results.forEach(element => {
							fetch(element.url)
								.then(response => response.json())
								.then(result2 => list.push(result2.result.properties))
								.catch(error => console.log("error", error));
						});

						setStore({ personajes: list });
					})
					.catch(error => console.log("error", error));
			},
			fetchplanets() {
				fetch("https://www.swapi.tech/api/planets/")
					.then(response => response.json())
					.then(result => {
						let list = [];
						result.results.forEach(element => {
							fetch(element.url)
								.then(response => response.json())
								.then(result2 => list.push(result2.result.properties))
								.catch(error => console.log("error", error));
						});

						setStore({ planets: list });
					})
					.catch(error => console.log("error", error));
			}
		}
	};
};

export default getState;
