const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planets: [],
			favlist: []
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
						let list2 = [];
						result.results.forEach(element => {
							fetch(element.url)
								.then(response => response.json())
								.then(result2 => list2.push(result2.result.properties))
								.catch(error => console.log("error", error));
						});

						setStore({ planets: list2 });
					})
					.catch(error => console.log("error", error));
			},
			favFunction: name => {
				const store = getStore();
				const validate = store.favlist.includes(name);
				if (validate === false) {
					const favlist = [...store.favlist, name];
					setStore({ favlist: favlist });
				}
			},
			favFunctionDelete: index => {
				const store = getStore();
				let newlist = [];
				store.favlist.map(function(item, index2) {
					if (index != index2) {
						newlist.push(item);
					}
				});
				setStore({ favlist: newlist });
			}
		}
	};
};

export default getState;
